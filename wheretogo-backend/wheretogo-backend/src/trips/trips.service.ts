import {
  Injectable,
  NotFoundException,
  ForbiddenException,
  BadRequestException,
} from '@nestjs/common';
import {
  PrismaClient,
  Prisma,
  TransportMode,
  Location,
  TripCollaboratorRole,
} from '@prisma/client';
import { CreateTripDto, GenerateTripDto } from './dto/trip.dto';
import { ChatService } from '../chat/chat.service';

const prisma = new PrismaClient();

// ─────────────────────────────────────────────────────────────
// PLANNER TYPES
// ─────────────────────────────────────────────────────────────

type StopCategory =
  | 'attraction'
  | 'cafe'
  | 'lunch'
  | 'dinner'
  | 'bar'
  | 'shopping';

type LocationCategory =
  | 'attraction'
  | 'cafe'
  | 'food'
  | 'bar'
  | 'shopping';

interface SlotSpec {
  category: StopCategory;
  /** Representative time used for opening-hours filtering (HH:MM). */
  checkTime: string;
  /** Earliest sensible arrival; meals "wait" until this time. */
  windowStart: string;
  /** Latest sensible arrival (soft, for scoring only). */
  windowEnd: string;
  visitDuration: number; // minutes
  /** Temporal rank; the day must keep these non-decreasing. */
  timeRank: number;
  isMeal?: boolean;
  isNight?: boolean;
}

interface PlannedStop {
  location: Location;
  category: StopCategory;
  order: number;
  visitDuration: number;
  arrivalTime?: string;
  departureTime?: string;
  transportMode?: TransportMode | null;
  travelKm?: number;
  notes?: string;
}

interface ParsedOpenHours {
  periods: { day: number; open: number; close: number | null }[];
}

@Injectable()
export class TripsService {
  constructor(private chatService: ChatService) {}

  // ─────────────────────────────────────────────────────────────
  // CONFIG
  // ─────────────────────────────────────────────────────────────

  private readonly DAY_START = '09:30';
  private readonly WALK_SPEED_KMH = 4.8;
  private readonly DRIVE_SPEED_KMH = 22;
  private readonly WALK_MAX_KM = 1.3; // above this we assume a car/taxi hop
  private readonly TRAVEL_BUFFER_MIN = 5;

  private readonly visitDurations: Record<StopCategory, number> = {
    attraction: 75,
    cafe: 45,
    lunch: 80,
    dinner: 90,
    bar: 120,
    shopping: 60,
  };

  private readonly cityAliases: Record<string, string[]> = {
    chisinau: ['chisinau', 'chișinău', 'chisnau'],
    bucharest: ['bucharest', 'bucuresti', 'bucurești', 'bucarest'],
  };

  private readonly typeAliases: Record<string, string[]> = {
    cafe: ['cafe', 'coffee_shop'],
    restaurant: ['restaurant', 'meal_takeaway', 'meal_delivery'],
    bar: ['bar', 'night_club'],
    park: ['park'],
    landmark: ['tourist_attraction', 'point_of_interest', 'landmark'],
    museum: ['museum', 'tourist_attraction'],
    nature: ['park', 'tourist_attraction'],
    shopping: ['shopping_mall', 'store', 'market'],
  };

  private readonly vibeAliases: Record<string, string[]> = {
    romantic: ['romantic', 'date'],
    chill: ['chill', 'casual'],
    foodie: ['foodie'],
    family: ['casual'],
    work: ['work'],
    social: ['social', 'night'],
    nightlife: ['night', 'social'],
    local: ['culture'],
    scenic: ['nature', 'culture'],
    adventure: ['nature', 'social'],
  };

  // ─────────────────────────────────────────────────────────────
  // TEXT / TYPE NORMALIZATION
  // ─────────────────────────────────────────────────────────────

  private normalizeText(value?: string | null): string {
    return (value ?? '')
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, ' ')
      .trim();
  }

  private expandLocationTypes(location: Location): string[] {
    const values = new Set<string>();
    const push = (value?: string | null) => {
      const normalized = this.normalizeText(value).replace(/ /g, '_');
      if (normalized) values.add(normalized);
    };

    push(location.type);
    (location.types ?? []).forEach(push);

    if (values.has('tourist_attraction')) {
      values.add('tourist_attraction');
    }

    return Array.from(values);
  }

  private expandPreferredTypes(values: string[]): string[] {
    const expanded = new Set<string>();
    values.forEach((value) => {
      const normalized = this.normalizeText(value).replace(/ /g, '_');
      if (!normalized) return;
      expanded.add(normalized);
      (this.typeAliases[normalized] ?? []).forEach((alias) =>
        expanded.add(alias),
      );
    });
    return Array.from(expanded);
  }

  private expandPreferredVibes(values: string[]): string[] {
    const expanded = new Set<string>();
    values.forEach((value) => {
      const normalized = this.normalizeText(value);
      if (!normalized) return;
      expanded.add(normalized);
      (this.vibeAliases[normalized] ?? []).forEach((alias) =>
        expanded.add(alias),
      );
    });
    return Array.from(expanded);
  }

  private getCityCandidates(city: string): string[] {
    const normalized = this.normalizeText(city);
    return Array.from(
      new Set(
        [normalized, ...(this.cityAliases[normalized] ?? [])].filter(Boolean),
      ),
    );
  }

  /** Map a location to a single coarse category used by the day skeleton. */
  private categoryOfLocation(location: Location): LocationCategory {
    const types = this.expandLocationTypes(location);
    const has = (...needles: string[]) =>
      needles.some((needle) => types.includes(needle));

    if (has('restaurant', 'meal_takeaway', 'meal_delivery', 'food')) {
      return 'food';
    }
    if (has('cafe', 'coffee_shop', 'bakery')) return 'cafe';
    if (has('bar', 'night_club', 'pub')) return 'bar';
    if (has('shopping_mall', 'store', 'market', 'supermarket')) {
      return 'shopping';
    }
    return 'attraction';
  }

  private slotAcceptsLocation(slot: SlotSpec, location: Location): boolean {
    const category = this.categoryOfLocation(location);
    switch (slot.category) {
      case 'lunch':
      case 'dinner':
        return category === 'food';
      case 'cafe':
        return category === 'cafe';
      case 'bar':
        return category === 'bar';
      case 'shopping':
        return category === 'shopping';
      case 'attraction':
      default:
        return category === 'attraction';
    }
  }

  // ─────────────────────────────────────────────────────────────
  // FILTERS / CANDIDATE POOL
  // ─────────────────────────────────────────────────────────────

  private matchesCity(location: Location, cityCandidates: string[]): boolean {
    if (!cityCandidates.length) return true;
    const haystack = this.normalizeText(
      [location.address, location.name, location.googleUrl]
        .filter(Boolean)
        .join(' '),
    );
    return cityCandidates.some((candidate) => haystack.includes(candidate));
  }

  private matchesPreferredTypes(
    location: Location,
    preferredTypes: string[],
  ): boolean {
    if (!preferredTypes.length) return true;
    const locationTypes = this.expandLocationTypes(location);
    return preferredTypes.some((type) => locationTypes.includes(type));
  }

  private matchesPreferredVibes(
    location: Location,
    preferredVibes: string[],
  ): boolean {
    if (!preferredVibes.length) return true;
    const vibes = (location.vibes ?? []).map((vibe) =>
      this.normalizeText(vibe),
    );
    return preferredVibes.some((vibe) => vibes.includes(vibe));
  }

  private matchesPriceRanges(
    location: Location,
    priceRanges: string[],
  ): boolean {
    if (!priceRanges.length) return true;
    return priceRanges.includes(location.priceRange ?? '');
  }

  private buildCandidatePool({
    locations,
    cityCandidates,
    preferredTypes,
    preferredVibes,
    priceRanges,
    minRating,
    totalStops,
  }: {
    locations: Location[];
    cityCandidates: string[];
    preferredTypes: string[];
    preferredVibes: string[];
    priceRanges: string[];
    minRating?: number;
    totalStops: number;
  }): Location[] {
    const ratedLocations =
      typeof minRating === 'number'
        ? locations.filter((location) => (location.rating ?? 0) >= minRating)
        : locations;

    const cityFiltered = ratedLocations.filter((location) =>
      this.matchesCity(location, cityCandidates),
    );

    // Stay inside the requested city as long as we have *any* match.
    // Mixing in other cities silently used to corrupt the itinerary.
    const basePool = cityFiltered.length ? cityFiltered : ratedLocations;

    const strictPool = basePool.filter(
      (location) =>
        this.matchesPreferredTypes(location, preferredTypes) &&
        this.matchesPreferredVibes(location, preferredVibes) &&
        this.matchesPriceRanges(location, priceRanges),
    );
    if (strictPool.length >= Math.max(totalStops, 6)) return strictPool;

    const mediumPool = basePool.filter(
      (location) =>
        this.matchesPriceRanges(location, priceRanges) &&
        (this.matchesPreferredTypes(location, preferredTypes) ||
          this.matchesPreferredVibes(location, preferredVibes)),
    );
    if (mediumPool.length >= Math.max(totalStops, 6)) return mediumPool;

    const pricePool = basePool.filter((location) =>
      this.matchesPriceRanges(location, priceRanges),
    );

    return pricePool.length >= totalStops ? pricePool : basePool;
  }

  // ─────────────────────────────────────────────────────────────
  // OPENING HOURS  (stored as JSON string of Google opening_hours)
  // ─────────────────────────────────────────────────────────────

  private parseOpenHours(raw?: string | null): ParsedOpenHours | null {
    if (!raw || typeof raw !== 'string') return null;
    const trimmed = raw.trim();
    if (!trimmed || trimmed === '[object Object]') return null;

    try {
      const data = JSON.parse(trimmed);
      const periods = Array.isArray(data?.periods) ? data.periods : null;
      if (!periods) return null;

      const toMinutes = (t?: string): number | null => {
        if (!t || t.length < 3) return null;
        const padded = t.padStart(4, '0');
        return parseInt(padded.slice(0, 2), 10) * 60 + parseInt(padded.slice(2), 10);
      };

      const normalized = periods
        .map((p: any) => {
          const open = toMinutes(p?.open?.time);
          const close = p?.close?.time ? toMinutes(p.close.time) : null;
          const day = typeof p?.open?.day === 'number' ? p.open.day : null;
          if (open === null || day === null) return null;
          return { day, open, close };
        })
        .filter(Boolean);

      return normalized.length ? { periods: normalized as any } : null;
    } catch {
      return null;
    }
  }

  /** Unknown hours are treated as "open" so missing data never blocks a stop. */
  private isOpenAt(parsed: ParsedOpenHours | null, date: Date, hhmm: string): boolean {
    if (!parsed) return true;
    const dow = date.getDay(); // 0 = Sunday … 6 = Saturday
    const target = this.timeToMinutes(hhmm);

    const todays = parsed.periods.filter((p) => p.day === dow);
    if (!todays.length) {
      // No period for this weekday → assume closed only if other days exist.
      return parsed.periods.length === 0;
    }

    return todays.some((p) => {
      if (p.close === null) return target >= p.open; // open-ended / 24h
      if (p.close > p.open) return target >= p.open && target < p.close;
      // Crosses midnight (e.g. bar open 20:00–02:00)
      return target >= p.open || target < p.close;
    });
  }

  // ─────────────────────────────────────────────────────────────
  // SCORING  (route-independent desirability)
  // ─────────────────────────────────────────────────────────────

  private baseQuality(
    location: Location,
    preferredTypes: string[],
    preferredVibes: string[],
  ): number {
    let score = 0;
    score += (location.popularityScore ?? 0) * 0.3; // 0–30
    score += (location.rating ?? 3.5) * 8; // ~28–40
    score += Math.min(location.userRatingsTotal ?? 0, 600) / 20; // 0–30

    const locationVibes = (location.vibes ?? []).map((v) =>
      this.normalizeText(v),
    );
    const vibeMatch = locationVibes.filter((v) =>
      preferredVibes.includes(v),
    ).length;
    score += vibeMatch * 12;

    if (this.matchesPreferredTypes(location, preferredTypes)) {
      score += preferredTypes.length ? 14 : 0;
    }

    return score;
  }

  /** Proximity bonus relative to the previous stop (favours short hops). */
  private proximityBonus(last: Location | undefined, candidate: Location): number {
    if (!last) return 0;
    const d = this.distanceKm(last, candidate);
    return this.clamp(20 - d * 4, -22, 20);
  }

  // ─────────────────────────────────────────────────────────────
  // DIVERSITY GUARD (per day)
  // ─────────────────────────────────────────────────────────────

  private canAddLocation(dayStops: PlannedStop[], candidate: Location): boolean {
    const candidateCategory = this.categoryOfLocation(candidate);
    const countOf = (category: LocationCategory) =>
      dayStops.filter(
        (s) => this.categoryOfLocation(s.location) === category,
      ).length;

    const candidateTypes = this.expandLocationTypes(candidate);
    if (candidateTypes.some((t) => t.includes('fast_food'))) {
      // never more than one fast-food per day
      const fastCount = dayStops.filter((s) =>
        this.expandLocationTypes(s.location).some((t) =>
          t.includes('fast_food'),
        ),
      ).length;
      if (fastCount >= 1) return false;
    }

    if (candidateCategory === 'cafe' && countOf('cafe') >= 1) return false;
    if (candidateCategory === 'bar' && countOf('bar') >= 1) return false;
    if (candidateCategory === 'food' && countOf('food') >= 2) return false;

    return true;
  }

  // ─────────────────────────────────────────────────────────────
  // DAY SKELETON  (meal-anchored narrative arc)
  // ─────────────────────────────────────────────────────────────

  private buildDaySkeleton(
    maxStops: number,
    preferredVibes: string[],
  ): SlotSpec[] {
    const attraction = (rank: number, checkTime: string): SlotSpec => ({
      category: 'attraction',
      checkTime,
      windowStart: '09:00',
      windowEnd: '19:00',
      visitDuration: this.visitDurations.attraction,
      timeRank: rank,
    });
    const cafe: SlotSpec = {
      category: 'cafe',
      checkTime: '11:00',
      windowStart: '08:00',
      windowEnd: '18:00',
      visitDuration: this.visitDurations.cafe,
      timeRank: 1,
    };
    const lunch: SlotSpec = {
      category: 'lunch',
      checkTime: '13:00',
      windowStart: '12:00',
      windowEnd: '15:30',
      visitDuration: this.visitDurations.lunch,
      timeRank: 2,
      isMeal: true,
    };
    const dinner: SlotSpec = {
      category: 'dinner',
      checkTime: '19:30',
      windowStart: '18:00',
      windowEnd: '22:00',
      visitDuration: this.visitDurations.dinner,
      timeRank: 4,
      isMeal: true,
    };
    const bar: SlotSpec = {
      category: 'bar',
      checkTime: '21:30',
      windowStart: '20:00',
      windowEnd: '23:59',
      visitDuration: this.visitDurations.bar,
      timeRank: 5,
      isNight: true,
    };

    const stops = Math.max(1, maxStops);
    let skeleton: SlotSpec[];

    switch (stops) {
      case 1:
        skeleton = [attraction(0, '10:30')];
        break;
      case 2:
        skeleton = [attraction(0, '10:30'), lunch];
        break;
      case 3:
        skeleton = [attraction(0, '10:30'), lunch, attraction(3, '15:30')];
        break;
      case 4:
        skeleton = [
          attraction(0, '10:30'),
          lunch,
          attraction(3, '15:30'),
          dinner,
        ];
        break;
      case 5:
        skeleton = [
          attraction(0, '10:00'),
          cafe,
          lunch,
          attraction(3, '15:30'),
          dinner,
        ];
        break;
      default:
        skeleton = [
          attraction(0, '10:00'),
          cafe,
          lunch,
          attraction(3, '15:30'),
          dinner,
          bar,
        ];
        // extra attractions for big days are slotted in the afternoon
        for (let i = 6; i < stops; i += 1) {
          skeleton.splice(skeleton.length - 2, 0, attraction(3, '16:30'));
        }
        break;
    }

    // Nightlife lovers get an evening venue without exceeding maxStops:
    // turn the last *flexible* (attraction) slot into a bar.
    const wantsNightlife = preferredVibes.some((v) =>
      ['night', 'nightlife', 'social'].includes(v),
    );
    if (
      wantsNightlife &&
      stops >= 3 &&
      !skeleton.some((s) => s.category === 'bar')
    ) {
      const lastIdx = skeleton.length - 1;
      if (skeleton[lastIdx].category === 'attraction') {
        skeleton[lastIdx] = bar;
      }
    }

    return skeleton;
  }

  // ─────────────────────────────────────────────────────────────
  // GEOGRAPHIC CLUSTERING  (k-means++, one cluster ≈ one day)
  // ─────────────────────────────────────────────────────────────

  private coords(location: Location): { lat: number; lng: number } | null {
    if (typeof location.lat !== 'number' || typeof location.lng !== 'number') {
      return null;
    }
    return { lat: location.lat, lng: location.lng };
  }

  private clusterLocationsByDay(
    locations: Location[],
    k: number,
  ): Location[][] {
    const points = locations
      .map((loc) => ({ loc, c: this.coords(loc) }))
      .filter((p) => p.c) as { loc: Location; c: { lat: number; lng: number } }[];

    if (k <= 1 || points.length <= k) {
      return k <= 1
        ? [points.map((p) => p.loc)]
        : points.map((p) => [p.loc]);
    }

    // ── k-means++ deterministic seeding (farthest-point heuristic) ──
    const centroids: { lat: number; lng: number }[] = [];
    const first = points.reduce((best, p) =>
      (p.loc.popularityScore ?? 0) > (best.loc.popularityScore ?? 0) ? p : best,
    );
    centroids.push({ ...first.c });

    while (centroids.length < k) {
      let farthest = points[0];
      let farthestDist = -1;
      for (const p of points) {
        const nearest = Math.min(
          ...centroids.map((c) => this.geoDist(c, p.c)),
        );
        if (nearest > farthestDist) {
          farthestDist = nearest;
          farthest = p;
        }
      }
      centroids.push({ ...farthest.c });
    }

    // ── Lloyd iterations ──
    let assignment = new Array(points.length).fill(0);
    for (let iter = 0; iter < 8; iter += 1) {
      let changed = false;
      points.forEach((p, idx) => {
        let bestCluster = 0;
        let bestDist = Infinity;
        centroids.forEach((c, ci) => {
          const d = this.geoDist(c, p.c);
          if (d < bestDist) {
            bestDist = d;
            bestCluster = ci;
          }
        });
        if (assignment[idx] !== bestCluster) {
          assignment[idx] = bestCluster;
          changed = true;
        }
      });

      for (let ci = 0; ci < k; ci += 1) {
        const members = points.filter((_, idx) => assignment[idx] === ci);
        if (!members.length) continue;
        centroids[ci] = {
          lat: members.reduce((s, m) => s + m.c.lat, 0) / members.length,
          lng: members.reduce((s, m) => s + m.c.lng, 0) / members.length,
        };
      }
      if (!changed) break;
    }

    const clusters: Location[][] = Array.from({ length: k }, () => []);
    points.forEach((p, idx) => clusters[assignment[idx]].push(p.loc));

    // Richest area first → "day 1" is the highlight.
    return clusters
      .filter((c) => c.length)
      .sort((a, b) => this.clusterQuality(b) - this.clusterQuality(a));
  }

  private clusterQuality(cluster: Location[]): number {
    return cluster.reduce(
      (sum, loc) =>
        sum + (loc.popularityScore ?? 0) + (loc.rating ?? 0) * 10,
      0,
    );
  }

  /** Squared-ish geo distance for clustering (km, equirectangular approx). */
  private geoDist(
    a: { lat: number; lng: number },
    b: { lat: number; lng: number },
  ): number {
    const x = ((b.lng - a.lng) * Math.cos(((a.lat + b.lat) / 2) * (Math.PI / 180)));
    const y = b.lat - a.lat;
    return Math.sqrt(x * x + y * y) * 111; // deg → km
  }

  // ─────────────────────────────────────────────────────────────
  // PER-DAY SELECTION  (skeleton-driven, budget & hours aware)
  // ─────────────────────────────────────────────────────────────

  private pickForSlot({
    slot,
    clusterPool,
    globalPool,
    usedIds,
    dayStops,
    preferredTypes,
    preferredVibes,
    lastLocation,
    budgetLeft,
    date,
  }: {
    slot: SlotSpec;
    clusterPool: Location[];
    globalPool: Location[];
    usedIds: Set<number>;
    dayStops: PlannedStop[];
    preferredTypes: string[];
    preferredVibes: string[];
    lastLocation?: Location;
    budgetLeft?: number;
    date: Date;
  }): Location | null {
    const eligible = (pool: Location[], enforceCategory: boolean) =>
      pool.filter((loc) => {
        if (usedIds.has(loc.id)) return false;
        if (enforceCategory && !this.slotAcceptsLocation(slot, loc)) {
          return false;
        }
        if (!this.canAddLocation(dayStops, loc)) return false;
        if (!this.isOpenAt(this.parseOpenHours(loc.openHours), date, slot.checkTime)) {
          return false;
        }
        return true;
      });

    // Preference order: cluster+category → global+category →
    //                   cluster+any → global+any
    const tiers: Location[][] = [
      eligible(clusterPool, true),
      eligible(globalPool, true),
      eligible(clusterPool, false),
      eligible(globalPool, false),
    ];

    const pool = tiers.find((tier) => tier.length) ?? [];
    if (!pool.length) return null;

    const scored = pool
      .map((loc) => {
        let score =
          this.baseQuality(loc, preferredTypes, preferredVibes) +
          this.proximityBonus(lastLocation, loc);

        const cost = loc.estimatedCost ?? 0;
        if (budgetLeft !== undefined && cost > 0) {
          if (cost > budgetLeft) score -= 40; // discourage blowing the budget
          else score += 6;
        }
        return { loc, score };
      })
      .sort((a, b) => b.score - a.score);

    return scored[0]?.loc ?? null;
  }

  private selectDayStops({
    skeleton,
    clusterPool,
    globalPool,
    usedIds,
    preferredTypes,
    preferredVibes,
    budgetLeft,
    date,
  }: {
    skeleton: SlotSpec[];
    clusterPool: Location[];
    globalPool: Location[];
    usedIds: Set<number>;
    preferredTypes: string[];
    preferredVibes: string[];
    budgetLeft?: number;
    date: Date;
  }): PlannedStop[] {
    const stops: PlannedStop[] = [];
    let remainingBudget = budgetLeft;

    for (const slot of skeleton) {
      const chosen = this.pickForSlot({
        slot,
        clusterPool,
        globalPool,
        usedIds,
        dayStops: stops,
        preferredTypes,
        preferredVibes,
        lastLocation: stops.at(-1)?.location,
        budgetLeft: remainingBudget,
        date,
      });

      if (!chosen) continue; // can't fill this slot — skip, keep the day going

      usedIds.add(chosen.id);
      stops.push({
        location: chosen,
        category: slot.category,
        order: stops.length + 1,
        visitDuration: slot.visitDuration,
      });

      if (remainingBudget !== undefined && chosen.estimatedCost) {
        remainingBudget = Math.max(0, remainingBudget - chosen.estimatedCost);
      }
    }

    return this.refineRoute(stops);
  }

  // ─────────────────────────────────────────────────────────────
  // ROUTE REFINEMENT  (2-opt restricted to equal time-rank runs)
  // ─────────────────────────────────────────────────────────────

  private pathDistance(stops: PlannedStop[]): number {
    let total = 0;
    for (let i = 1; i < stops.length; i += 1) {
      total += this.distanceKm(stops[i - 1].location, stops[i].location);
    }
    return total;
  }

  /**
   * Local 2-opt. We only accept moves that keep meal/bar anchors in temporal
   * order, so attractions get re-sequenced for shorter walks without ever
   * putting dinner before lunch.
   */
  private refineRoute(stops: PlannedStop[]): PlannedStop[] {
    if (stops.length < 4) return stops;

    const rankOf = (s: PlannedStop): number => {
      switch (s.category) {
        case 'lunch':
          return 2;
        case 'dinner':
          return 4;
        case 'bar':
          return 5;
        default:
          return 3; // attractions / cafés are flexible mid-day
      }
    };

    let best = [...stops];
    let improved = true;

    while (improved) {
      improved = false;
      for (let i = 0; i < best.length - 1; i += 1) {
        for (let j = i + 1; j < best.length; j += 1) {
          const candidate = [
            ...best.slice(0, i),
            ...best.slice(i, j + 1).reverse(),
            ...best.slice(j + 1),
          ];
          // reject if anchors are no longer non-decreasing
          const ranks = candidate.map(rankOf);
          const sorted = ranks.every(
            (r, idx) => idx === 0 || r >= ranks[idx - 1],
          );
          if (!sorted) continue;

          if (this.pathDistance(candidate) + 1e-6 < this.pathDistance(best)) {
            best = candidate;
            improved = true;
          }
        }
      }
    }

    return best.map((stop, idx) => ({ ...stop, order: idx + 1 }));
  }

  // ─────────────────────────────────────────────────────────────
  // TIMING  (chained arrival/departure + travel time + transport)
  // ─────────────────────────────────────────────────────────────

  private travelMinutes(from: Location, to: Location): number {
    const d = this.distanceKm(from, to);
    const speed = d <= this.WALK_MAX_KM ? this.WALK_SPEED_KMH : this.DRIVE_SPEED_KMH;
    return Math.round((d / speed) * 60) + this.TRAVEL_BUFFER_MIN;
  }

  private inferTransportMode(from: Location, to: Location): TransportMode {
    const d = this.distanceKm(from, to);
    if (d <= this.WALK_MAX_KM) return TransportMode.WALK;
    if (d <= 6) return TransportMode.PUBLIC_TRANSPORT;
    return TransportMode.CAR;
  }

  private applyTiming(stops: PlannedStop[], skeleton: SlotSpec[]): PlannedStop[] {
    let cursor = this.timeToMinutes(this.DAY_START);

    return stops.map((stop, idx) => {
      const slot = skeleton.find((s) => s.category === stop.category);
      let travelKm = 0;
      let transportMode: TransportMode | null = null;

      if (idx > 0) {
        const prev = stops[idx - 1].location;
        travelKm = this.distanceKm(prev, stop.location);
        transportMode = this.inferTransportMode(prev, stop.location);
        cursor += this.travelMinutes(prev, stop.location);
      }

      // Meals "wait" for their window so lunch lands at lunchtime.
      if (slot?.windowStart) {
        const windowStart = this.timeToMinutes(slot.windowStart);
        if ((slot.isMeal || slot.isNight) && cursor < windowStart) {
          cursor = windowStart;
        }
      }

      const arrival = this.minutesToTime(cursor);
      cursor += stop.visitDuration;
      const departure = this.minutesToTime(cursor);

      return {
        ...stop,
        order: idx + 1,
        arrivalTime: arrival,
        departureTime: departure,
        transportMode,
        travelKm,
        notes:
          idx === 0
            ? this.stopNote(stop)
            : `${this.stopNote(stop)} · ${travelKm.toFixed(1)} km de la oprirea precedentă`,
      };
    });
  }

  private stopNote(stop: PlannedStop): string {
    const labels: Record<StopCategory, string> = {
      attraction: 'Obiectiv principal',
      cafe: 'Pauză de cafea',
      lunch: 'Prânz',
      dinner: 'Cină',
      bar: 'Ieșire de seară',
      shopping: 'Shopping',
    };
    return labels[stop.category];
  }

  // ─────────────────────────────────────────────────────────────
  // TIME HELPERS
  // ─────────────────────────────────────────────────────────────

  private timeToMinutes(time: string): number {
    const [h, m] = time.split(':').map(Number);
    return h * 60 + (m || 0);
  }

  private minutesToTime(total: number): string {
    const wrapped = ((total % 1440) + 1440) % 1440;
    const h = Math.floor(wrapped / 60);
    const m = wrapped % 60;
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
  }

  private addMinutes(time: string, minutes: number): string {
    return this.minutesToTime(this.timeToMinutes(time) + minutes);
  }

  private clamp(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(max, value));
  }

  // ─────────────────────────────────────────────────────────────
  // GENERIC HELPERS
  // ─────────────────────────────────────────────────────────────

  private normalizeTransportMode(mode?: string): TransportMode | null {
    if (!mode) return null;
    const upper = mode.toUpperCase();
    if ((Object.values(TransportMode) as string[]).includes(upper)) {
      return upper as TransportMode;
    }
    return null;
  }

  private distanceKm(
    a: { lat?: number | null; lng?: number | null },
    b: { lat?: number | null; lng?: number | null },
  ): number {
    if (!a.lat || !a.lng || !b.lat || !b.lng) return 0;
    const R = 6371;
    const dLat = ((b.lat - a.lat) * Math.PI) / 180;
    const dLng = ((b.lng - a.lng) * Math.PI) / 180;
    const x =
      Math.sin(dLat / 2) ** 2 +
      Math.cos((a.lat * Math.PI) / 180) *
        Math.cos((b.lat * Math.PI) / 180) *
        Math.sin(dLng / 2) ** 2;
    return 2 * R * Math.asin(Math.sqrt(x));
  }

  private estimateCostFromPriceRange(
    priceRange?: string | null,
  ): number | null {
    if (!priceRange) return null;
    const normalized = priceRange.trim().toLowerCase();

    const symbolCount = (normalized.match(/\$|€/g) || []).length;
    if (symbolCount > 0) return symbolCount * 15;

    if (normalized.includes('cheap') || normalized.includes('low')) return 10;
    if (normalized.includes('medium') || normalized.includes('mid')) return 20;
    if (normalized.includes('high') || normalized.includes('expensive')) {
      return 35;
    }
    return null;
  }

  // ─────────────────────────────────────────────────────────────
  // CREATE TRIP (MANUAL)
  // ─────────────────────────────────────────────────────────────

  async createTrip(ownerId: number, input: CreateTripDto) {
    return prisma.trip.create({
      data: {
        ownerId,
        title: input.title,
        description: input.description ?? null,
        startDate: input.startDate,
        endDate: input.endDate,
        city: input.city ?? null,
        country: input.country ?? null,
        isPublic: input.isPublic ?? false,
        totalBudget: input.totalBudget ?? null,
        currency: input.currency ?? null,
        days: input.days?.length
          ? {
              create: input.days.map((day) => ({
                dayNumber: day.dayNumber,
                date: day.date,
                notes: day.notes ?? null,
                stops: day.stops?.length
                  ? {
                      create: day.stops.map((stop) => ({
                        locationId: stop.locationId ?? null,
                        customName: stop.customName ?? null,
                        address: stop.address ?? null,
                        lat: stop.lat ?? null,
                        lng: stop.lng ?? null,
                        order: stop.order,
                        arrivalTime: stop.arrivalTime ?? null,
                        departureTime: stop.departureTime ?? null,
                        transportMode: this.normalizeTransportMode(
                          stop.transportMode,
                        ),
                        notes: stop.notes ?? null,
                        estimatedCost: stop.estimatedCost ?? null,
                      })),
                    }
                  : undefined,
              })),
            }
          : undefined,
      },
      include: this.tripInclude(),
    });
  }

  // ─────────────────────────────────────────────────────────────
  // GENERATE TRIP V3
  // geo-clustering → meal-anchored day skeleton → 2-opt route →
  // chained timing + opening hours + budget
  // ─────────────────────────────────────────────────────────────

  async generateTrip(ownerId: number, input: GenerateTripDto) {
    const maxStops = Math.max(1, input.maxStopsPerDay ?? 4);
    const daysCount = Math.max(1, input.daysCount);
    const totalStops = daysCount * maxStops;

    const cleanedTypes = (input.types ?? [])
      .map((t) => t.trim())
      .filter(Boolean);
    const cleanedVibes = (input.vibes ?? [])
      .map((v) => v.trim())
      .filter(Boolean);
    const cleanedPriceRanges = (input.priceRanges ?? [])
      .map((p) => p.trim())
      .filter(Boolean);

    const preferredTypes = this.expandPreferredTypes(cleanedTypes);
    const preferredVibes = this.expandPreferredVibes(cleanedVibes);
    const cityCandidates = this.getCityCandidates(input.city);

    const where: Prisma.LocationWhereInput = {
      lat: { not: null },
      lng: { not: null },
    };
    if (typeof input.minRating === 'number') {
      where.rating = { gte: input.minRating };
    }

    let locations = await prisma.location.findMany({
      where,
      orderBy: [
        { popularityScore: 'desc' },
        { rating: 'desc' },
        { userRatingsTotal: 'desc' },
      ],
      take: Math.min(totalStops * 6, 400),
    });

    if (!locations.length) {
      locations = await prisma.location.findMany({
        where: { lat: { not: null }, lng: { not: null } },
        orderBy: [{ popularityScore: 'desc' }, { rating: 'desc' }],
        take: Math.min(totalStops * 6, 400),
      });
    }
    if (!locations.length) {
      throw new NotFoundException('No locations found');
    }

    // Fill in a rough cost where the dataset is missing one.
    const enrichedLocations: Location[] = locations.map((loc) => ({
      ...loc,
      estimatedCost:
        loc.estimatedCost ?? this.estimateCostFromPriceRange(loc.priceRange),
    }));

    const candidatePool = this.buildCandidatePool({
      locations: enrichedLocations,
      cityCandidates,
      preferredTypes,
      preferredVibes,
      priceRanges: cleanedPriceRanges,
      minRating: input.minRating,
      totalStops,
    });
    if (!candidatePool.length) {
      throw new NotFoundException('No locations found for this city');
    }

    // One geographic cluster per day.
    const clusters = this.clusterLocationsByDay(candidatePool, daysCount);

    const budgetPerDay = input.totalBudget
      ? input.totalBudget / daysCount
      : undefined;

    const startDate = new Date(input.startDate);
    const usedIds = new Set<number>();

    const stopsByDay = Array.from({ length: daysCount }, (_, dayIndex) => {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + dayIndex);

      const skeleton = this.buildDaySkeleton(maxStops, preferredVibes);
      const clusterPool = clusters[dayIndex] ?? [];

      const selected = this.selectDayStops({
        skeleton,
        clusterPool,
        globalPool: candidatePool,
        usedIds,
        preferredTypes,
        preferredVibes,
        budgetLeft: budgetPerDay,
        date,
      });

      const timed = this.applyTiming(selected, skeleton);

      return {
        date,
        dayNumber: dayIndex + 1,
        stops: timed.map((stop) => ({
          locationId: stop.location.id,
          order: stop.order,
          customName: stop.location.name,
          address: stop.location.address ?? null,
          lat: stop.location.lat ?? null,
          lng: stop.location.lng ?? null,
          estimatedCost: stop.location.estimatedCost ?? null,
          arrivalTime: stop.arrivalTime ?? null,
          departureTime: stop.departureTime ?? null,
          transportMode: stop.transportMode ?? null,
          notes: stop.notes ?? null,
        })),
        meta: {
          distanceKm: timed.reduce((s, st) => s + (st.travelKm ?? 0), 0),
          cost: timed.reduce((s, st) => s + (st.location.estimatedCost ?? 0), 0),
        },
      };
    });

    const actualTotalCost = stopsByDay.reduce(
      (sum, day) => sum + day.meta.cost,
      0,
    );

    return prisma.trip.create({
      data: {
        ownerId,
        title: input.title ?? `Trip in ${input.city}`,
        status: 'PLANNED',
        startDate,
        endDate: new Date(
          startDate.getTime() + (daysCount - 1) * 86400000,
        ),
        city: input.city,
        totalBudget: input.totalBudget ?? actualTotalCost,
        currency: input.currency ?? 'MDL',
        days: {
          create: stopsByDay.map((day) => ({
            dayNumber: day.dayNumber,
            date: day.date,
            notes:
              `${day.stops.length} opriri · ~${day.meta.distanceKm.toFixed(1)} km` +
              (day.meta.cost ? ` · ~${Math.round(day.meta.cost)} ${input.currency ?? 'MDL'}` : ''),
            stops: { create: day.stops },
          })),
        },
      },
      include: this.tripInclude(),
    });
  }

  // ─────────────────────────────────────────────────────────────
  // QUERIES
  // ─────────────────────────────────────────────────────────────

  async getTripsByOwner(userId: number) {
    return prisma.trip.findMany({
      where: {
        OR: [
          { ownerId: userId }, // User is owner
          { collaborators: { some: { userId } } }, // OR user is collaborator
        ],
      },
      include: this.tripInclude(),
      orderBy: { createdAt: 'desc' },
    });
  }

  async getTripById(id: number, userId: number) {
    const trip = await prisma.trip.findFirst({
      where: {
        id,
        OR: [
          { ownerId: userId }, // User is owner
          { collaborators: { some: { userId } } }, // OR user is collaborator
        ],
      },
      include: this.tripInclude(),
    });

    if (!trip) {
      throw new NotFoundException('Trip not found');
    }

    return trip;
  }

  async updateTrip(
    tripId: number,
    ownerId: number,
    input: Partial<CreateTripDto>,
  ) {
    const existingTrip = await prisma.trip.findFirst({
      where: { id: tripId, ownerId },
      select: { id: true },
    });

    if (!existingTrip) {
      throw new ForbiddenException('Not authorized to modify this trip');
    }

    const updateData: Prisma.TripUpdateInput = {};

    if (typeof input.title === 'string') updateData.title = input.title;
    if (typeof input.description !== 'undefined') {
      updateData.description = input.description ?? null;
    }
    if (input.startDate) updateData.startDate = input.startDate;
    if (input.endDate) updateData.endDate = input.endDate;
    if (typeof input.city !== 'undefined') updateData.city = input.city ?? null;
    if (typeof input.country !== 'undefined') {
      updateData.country = input.country ?? null;
    }
    if (typeof input.isPublic === 'boolean')
      updateData.isPublic = input.isPublic;
    if (typeof input.totalBudget !== 'undefined') {
      updateData.totalBudget = input.totalBudget ?? null;
    }
    if (typeof input.currency !== 'undefined') {
      updateData.currency = input.currency ?? null;
    }

    return prisma.trip.update({
      where: { id: tripId },
      data: updateData,
      include: this.tripInclude(),
    });
  }

  async changeTripStatus(tripId: number, ownerId: number, status: string) {
    const normalizedStatus = status.toUpperCase();
    const allowedStatuses = [
      'DRAFT',
      'PLANNED',
      'ACTIVE',
      'COMPLETED',
      'CANCELLED',
    ];

    if (!allowedStatuses.includes(normalizedStatus)) {
      throw new NotFoundException('Invalid trip status');
    }

    const existingTrip = await prisma.trip.findFirst({
      where: { id: tripId, ownerId },
      select: { id: true },
    });

    if (!existingTrip) {
      throw new ForbiddenException('Not authorized to modify this trip');
    }

    return prisma.trip.update({
      where: { id: tripId },
      data: { status: normalizedStatus as any },
      include: this.tripInclude(),
    });
  }

  async deleteTrip(tripId: number, ownerId: number) {
    const existingTrip = await prisma.trip.findFirst({
      where: { id: tripId, ownerId },
      select: { id: true },
    });

    if (!existingTrip) {
      throw new ForbiddenException('Not authorized to delete this trip');
    }

    await prisma.trip.delete({
      where: { id: tripId },
    });

    return { message: 'Trip deleted successfully' };
  }

  // ─────────────────────────────────────────────────────────────
  // REORDER STOPS  (atomic, respects @@unique([tripDayId, order]))
  // ─────────────────────────────────────────────────────────────

  async reorderDayStops(
    userId: number,
    tripDayId: number,
    stopIds: number[],
  ) {
    const day = await prisma.tripDay.findUnique({
      where: { id: tripDayId },
      include: {
        stops: { select: { id: true } },
        trip: {
          select: {
            id: true,
            ownerId: true,
            collaborators: { select: { userId: true, role: true } },
          },
        },
      },
    });

    if (!day) {
      throw new NotFoundException('Trip day not found');
    }

    const isOwner = day.trip.ownerId === userId;
    const isEditor = day.trip.collaborators.some(
      (collaborator) =>
        collaborator.userId === userId &&
        (collaborator.role === TripCollaboratorRole.EDITOR ||
          collaborator.role === TripCollaboratorRole.OWNER),
    );
    if (!isOwner && !isEditor) {
      throw new ForbiddenException('Not authorized to edit this trip');
    }

    // Keep only ids that actually belong to this day, in the requested order.
    const validIds = new Set(day.stops.map((stop) => stop.id));
    const ordered = stopIds.filter((id) => validIds.has(id));
    if (!ordered.length) {
      return this.getTripById(day.trip.id, userId);
    }

    // Two-phase write: park everything in a negative range first so no
    // intermediate state violates the (tripDayId, order) unique index.
    await prisma.$transaction([
      ...ordered.map((id, index) =>
        prisma.tripStop.update({
          where: { id },
          data: { order: -(index + 1) },
        }),
      ),
      ...ordered.map((id, index) =>
        prisma.tripStop.update({
          where: { id },
          data: { order: index + 1 },
        }),
      ),
    ]);

    return this.getTripById(day.trip.id, userId);
  }

  private tripInclude(): Prisma.TripInclude {
    return {
      days: {
        orderBy: { dayNumber: 'asc' },
        include: {
          stops: { orderBy: { order: 'asc' } },
        },
      },
      collaborators: {
        include: {
          user: { select: { id: true, name: true, email: true, avatar: true } },
        },
      },
      owner: { select: { id: true, name: true, email: true, avatar: true } },
    };
  }

  // ─────────────────────────────────────────────────────────────
  // COLLABORATORS
  // ─────────────────────────────────────────────────────────────

  async addCollaborator(
    tripId: number,
    ownerId: number,
    collaboratorEmail: string,
    role: TripCollaboratorRole = TripCollaboratorRole.VIEWER,
  ) {
    const normalizedEmail = collaboratorEmail.trim().toLowerCase();

    if (!normalizedEmail) {
      throw new BadRequestException('Email is required');
    }

    // Check trip ownership
    const trip = await prisma.trip.findFirst({
      where: { id: tripId, ownerId },
      select: { id: true, title: true },
    });
    if (!trip) {
      throw new ForbiddenException('Not authorized to modify this trip');
    }

    // Find user by email
    const collaborator = await prisma.user.findFirst({
      where: {
        email: { equals: normalizedEmail, mode: 'insensitive' },
      },
      select: { id: true, name: true },
    });
    if (!collaborator) {
      throw new NotFoundException('User not found');
    }

    if (collaborator.id === ownerId) {
      throw new BadRequestException('Owner is already part of this trip');
    }

    // Add collaborator
    const result = await prisma.tripCollaborator.upsert({
      where: {
        tripId_userId: { tripId, userId: collaborator.id },
      },
      update: { role },
      create: {
        tripId,
        userId: collaborator.id,
        role,
      },
      include: {
        user: { select: { id: true, name: true, email: true, avatar: true } },
      },
    });

    // 🔥 Creare automată chat room pentru trip (dacă nu există)
    try {
      await this.chatService.createTripChatRoom(tripId, ownerId);
    } catch (error) {
      // Chat room deja există, nu e problemă
      console.log('Chat room already exists or error:', error.message);
    }

    // Return data needed for notification
    return {
      collaborator: result,
      tripTitle: trip.title,
      addedUserId: collaborator.id,
    };
  }

  async removeCollaborator(
    tripId: number,
    ownerId: number,
    collaboratorId: number,
  ) {
    // Check trip ownership
    const trip = await prisma.trip.findFirst({
      where: { id: tripId, ownerId },
    });
    if (!trip) {
      throw new ForbiddenException('Not authorized to modify this trip');
    }

    return prisma.tripCollaborator.delete({
      where: {
        tripId_userId: { tripId, userId: collaboratorId },
      },
    });
  }

  async getCollaborators(tripId: number) {
    return prisma.tripCollaborator.findMany({
      where: { tripId },
      include: {
        user: { select: { id: true, name: true, email: true, avatar: true } },
      },
    });
  }

  // ─────────────────────────────────────────────────────────────
  // TRIP REMINDERS (call from a cron job)
  // ─────────────────────────────────────────────────────────────

  async getTripsStartingSoon(daysAhead: number) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const targetDate = new Date(today);
    targetDate.setDate(today.getDate() + daysAhead);

    const nextDay = new Date(targetDate);
    nextDay.setDate(targetDate.getDate() + 1);

    return prisma.trip.findMany({
      where: {
        startDate: {
          gte: targetDate,
          lt: nextDay,
        },
      },
      include: {
        owner: { select: { id: true, name: true } },
        collaborators: {
          include: { user: { select: { id: true } } },
        },
      },
    });
  }
}
