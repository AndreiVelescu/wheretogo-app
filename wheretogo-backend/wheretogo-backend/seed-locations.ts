import axios from 'axios';
import pLimit from 'p-limit';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
if (!API_KEY) throw new Error('Missing GOOGLE_PLACES_API_KEY in .env');

// Tipurile pe care le seed-uiești (alege ce vrei)
type PlaceType =
  | 'restaurant'
  | 'cafe'
  | 'bar'
  | 'tourist_attraction'
  | 'museum'
  | 'night_club';

const ALLOWED_TYPES: PlaceType[] = [
  'restaurant',
  'cafe',
  'bar',
  'tourist_attraction',
  'museum',
  'night_club',
];

// ====== SETARE ORAȘ (Chișinău exemplu) ======
const CITY = {
  name: 'Chisinau',
  // bounding box aproximativ
  south: 46.93,
  west: 28.75,
  north: 47.08,
  east: 28.98,
};

// grid step (0.02 ≈ 2.2km lat)
const GRID_STEP = 0.02;
// radius în metri pentru nearbysearch
const RADIUS_METERS = 2200;
// limită paralelizare (nu exagera, ca să nu lovești rate limits)
const limit = pLimit(2);

const MAX_RETRIES = 5;
const RETRY_DELAY_MS = 2500;

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

function buildGridPoints() {
  const points: Array<{ lat: number; lng: number }> = [];
  for (let lat = CITY.south; lat <= CITY.north; lat += GRID_STEP) {
    for (let lng = CITY.west; lng <= CITY.east; lng += GRID_STEP) {
      points.push({ lat: +lat.toFixed(6), lng: +lng.toFixed(6) });
    }
  }
  return points;
}

type GoogleNearbyResult = {
  place_id: string;
  name: string;
  geometry: { location: { lat: number; lng: number } };
  types?: string[];
  rating?: number;
  user_ratings_total?: number;
};

type GoogleDetailsResult = {
  formatted_address?: string;
  website?: string;
  formatted_phone_number?: string;
  url?: string; // google maps url
  opening_hours?: { weekday_text?: string[] };
  photos?: Array<{ photo_reference: string }>;
};

async function fetchNearbyPage(params: {
  lat: number;
  lng: number;
  type: PlaceType;
  pageToken?: string;
}) {
  const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';
  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      const res = await axios.get(url, {
        params: {
          key: API_KEY,
          location: `${params.lat},${params.lng}`,
          radius: RADIUS_METERS,
          type: params.type,
          pagetoken: params.pageToken,
        },
        timeout: 20_000,
      });

      const data = res.data as {
        status: string;
        results: GoogleNearbyResult[];
        next_page_token?: string;
        error_message?: string;
      };

      if (data.status === 'OVER_QUERY_LIMIT' && attempt < MAX_RETRIES) {
        await sleep(RETRY_DELAY_MS * (attempt + 1));
        continue;
      }

      return data;
    } catch (error) {
      if (attempt >= MAX_RETRIES) throw error;
      await sleep(RETRY_DELAY_MS * (attempt + 1));
    }
  }

  return {
    status: 'UNKNOWN_ERROR',
    results: [],
    error_message: 'Failed to fetch nearby page after retries',
  };
}

async function fetchDetails(placeId: string) {
  const url = 'https://maps.googleapis.com/maps/api/place/details/json';

  // IMPORTANT: cere doar fields utile (nu reviews etc.)
  const fields = [
    'formatted_address',
    'website',
    'formatted_phone_number',
    'url',
    'opening_hours',
    'photos',
  ].join(',');

  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      const res = await axios.get(url, {
        params: {
          key: API_KEY,
          place_id: placeId,
          fields,
        },
        timeout: 20_000,
      });

      const data = res.data as {
        status: string;
        result?: GoogleDetailsResult;
        error_message?: string;
      };

      if (data.status === 'OVER_QUERY_LIMIT' && attempt < MAX_RETRIES) {
        await sleep(RETRY_DELAY_MS * (attempt + 1));
        continue;
      }

      return data;
    } catch (error) {
      if (attempt >= MAX_RETRIES) throw error;
      await sleep(RETRY_DELAY_MS * (attempt + 1));
    }
  }

  return {
    status: 'UNKNOWN_ERROR',
    error_message: 'Failed to fetch details after retries',
  };
}

function buildPhotoUrl(photoRef: string, maxWidth = 1200) {
  // Atenție: endpointul returnează redirect către imagine
  return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${maxWidth}&photoreference=${encodeURIComponent(
    photoRef,
  )}&key=${API_KEY}`;
}

async function upsertLocation(input: {
  placeId: string;
  name: string;
  lat: number;
  lng: number;
  type: string;
  rating?: number;
  userRatingsTotal?: number;
  address?: string;
  website?: string;
  phone?: string;
  googleUrl?: string;
  openHours?: string;
  photos?: string[];
}) {
  const existingByPlaceId = await prisma.location.findUnique({
    where: { placeId: input.placeId },
    select: { id: true },
  });

  if (!existingByPlaceId && input.address) {
    const existingByNameAddress = await prisma.location.findUnique({
      where: {
        name_address_unique: {
          name: input.name,
          address: input.address,
        },
      },
      select: { id: true, placeId: true },
    });

    if (existingByNameAddress) {
      await prisma.location.update({
        where: { id: existingByNameAddress.id },
        data: {
          placeId: existingByNameAddress.placeId ?? input.placeId,
          name: input.name,
          type: input.type,
          lat: input.lat,
          lng: input.lng,
          rating: input.rating ?? null,
          userRatingsTotal: input.userRatingsTotal ?? null,
          address: input.address ?? null,
          website: input.website ?? null,
          phone: input.phone ?? null,
          googleUrl: input.googleUrl ?? null,
          openHours: input.openHours ?? null,
          photos: input.photos ?? [],
          googleImported: true,
        },
      });
      return;
    }
  }

  await prisma.location.upsert({
    where: { placeId: input.placeId },
    create: {
      placeId: input.placeId,
      name: input.name,
      type: input.type,
      lat: input.lat,
      lng: input.lng,
      rating: input.rating ?? null,
      userRatingsTotal: input.userRatingsTotal ?? null,
      address: input.address ?? null,
      website: input.website ?? null,
      phone: input.phone ?? null,
      googleUrl: input.googleUrl ?? null,
      openHours: input.openHours ?? null,
      photos: input.photos ?? [],
      vibes: [], // seed curat: fără “ghicit” aici
      googleImported: true,
      // restul rămân null/implicit (description, priceRange, menuPdf etc.)
    },
    update: {
      // update minimal — nu strică ce poate edita business/user ulterior
      name: input.name,
      lat: input.lat,
      lng: input.lng,
      rating: input.rating ?? null,
      userRatingsTotal: input.userRatingsTotal ?? null,
      address: input.address ?? null,
      website: input.website ?? null,
      phone: input.phone ?? null,
      googleUrl: input.googleUrl ?? null,
      openHours: input.openHours ?? null,
      // la poze: doar dacă nu ai deja poze setate (ca să nu rescrii custom)
      photos: input.photos ?? [],
      googleImported: true,
    },
  });
}

async function seedOneTypeAtPoint(lat: number, lng: number, type: PlaceType) {
  let page = await fetchNearbyPage({ lat, lng, type });

  if (page.status !== 'OK' && page.status !== 'ZERO_RESULTS') {
    console.warn('Nearby status:', page.status, page.error_message ?? '');
  }

  await handleNearbyResults(page.results, type);

  let token = page.next_page_token;

  // Nearby Search are max 3 pagini (prima + încă 2)
  for (let i = 0; i < 2 && token; i++) {
    // token devine valid după ~2 sec
    await sleep(2200);

    page = await fetchNearbyPage({ lat, lng, type, pageToken: token });

    if (page.status !== 'OK' && page.status !== 'ZERO_RESULTS') {
      console.warn(
        'Nearby page status:',
        page.status,
        page.error_message ?? '',
      );
    }

    await handleNearbyResults(page.results, type);
    token = page.next_page_token;
  }
}

async function handleNearbyResults(
  results: GoogleNearbyResult[],
  mainType: PlaceType,
) {
  if (!results?.length) return;

  // ca să nu faci Details pentru toate (cost + zgomot), fă-l doar când inserezi prima dată
  for (const r of results) {
    const placeId = r.place_id;
    const name = r.name;
    const lat = r.geometry?.location?.lat;
    const lng = r.geometry?.location?.lng;

    if (!placeId || !name || typeof lat !== 'number' || typeof lng !== 'number')
      continue;

    // verifică dacă deja există (ca să eviți details inutile)
    const exists = await prisma.location.findUnique({
      where: { placeId },
      select: { id: true, photos: true },
    });

    let address: string | undefined;
    let website: string | undefined;
    let phone: string | undefined;
    let googleUrl: string | undefined;
    let openHours: string | undefined;
    let photos: string[] | undefined;

    // doar dacă nu există încă, ia details (minimal)
    if (!exists) {
      const details = await fetchDetails(placeId);

      if (details.status === 'OK' && details.result) {
        address = details.result.formatted_address;
        website = details.result.website;
        phone = details.result.formatted_phone_number;
        googleUrl = details.result.url;

        const weekday = details.result.opening_hours?.weekday_text;
        if (weekday?.length) {
          // modelul tău e String? -> salvăm text “curat”
          openHours = weekday.join(' | ');
        }

        const refs =
          details.result.photos?.slice(0, 3).map((p) => p.photo_reference) ??
          [];
        if (refs.length) {
          photos = refs.map((ref) => buildPhotoUrl(ref));
        }
      } else if (details.status !== 'ZERO_RESULTS') {
        console.warn(
          'Details status:',
          details.status,
          details.error_message ?? '',
        );
      }
    }

    await upsertLocation({
      placeId,
      name,
      lat,
      lng,
      type: mainType, // “type” în modelul tău
      rating: r.rating,
      userRatingsTotal: r.user_ratings_total,
      address,
      website,
      phone,
      googleUrl,
      openHours,
      photos,
    });
  }
}

async function main() {
  console.log(`Seeding city: ${CITY.name}`);
  const points = buildGridPoints();
  console.log(
    `Grid points: ${points.length} | step=${GRID_STEP} | radius=${RADIUS_METERS}m`,
  );

  const tasks: Promise<void>[] = [];
  const totalTasks = points.length * ALLOWED_TYPES.length;
  let completedTasks = 0;
  let processed = 0;

  for (const p of points) {
    for (const t of ALLOWED_TYPES) {
      tasks.push(
        limit(async () => {
          try {
            await seedOneTypeAtPoint(p.lat, p.lng, t);
          } catch (e: any) {
            console.warn('Seed error:', {
              lat: p.lat,
              lng: p.lng,
              type: t,
              msg: e?.message,
            });
          } finally {
            completedTasks++;
            if (completedTasks % 50 === 0 || completedTasks === totalTasks) {
              console.log(
                `Tasks done: ${completedTasks}/${totalTasks} (${Math.round(
                  (completedTasks / totalTasks) * 100,
                )}%)`,
              );
            }
          }
        }),
      );
    }

    processed++;
    if (processed % 10 === 0) {
      console.log(`Progress points: ${processed}/${points.length}`);
    }
  }

  await Promise.all(tasks);

  const count = await prisma.location.count({
    where: { googleImported: true },
  });
  console.log('Done. Seeded locations:', count);
}

main()
  .catch((e) => {
    console.error(e);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
