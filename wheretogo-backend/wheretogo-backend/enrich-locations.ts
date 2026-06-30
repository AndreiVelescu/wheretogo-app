import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/* =====================
   CONFIG
===================== */

type PriceRange = '$' | '$$' | '$$$';

const TYPE_VIBES: Record<string, string[]> = {
  cafe: ['chill', 'romantic', 'work'],
  restaurant: ['foodie', 'date'],
  bar: ['social', 'night'],
  night_club: ['party', 'night'],
  museum: ['culture', 'quiet'],
  tourist_attraction: ['culture', 'nature'],
};

const BASE_COST_BY_TYPE: Record<string, number> = {
  cafe: 8,
  restaurant: 20,
  bar: 15,
  night_club: 30,
  museum: 5,
  tourist_attraction: 0,
};

/* =====================
   HELPERS
===================== */

function inferPriceRange(type: string, rating?: number | null): PriceRange {
  if (type === 'museum' || type === 'tourist_attraction') return '$';
  if (type === 'cafe') return rating && rating >= 4.5 ? '$$' : '$';
  if (type === 'restaurant') return rating && rating >= 4.6 ? '$$$' : '$$';
  if (type === 'night_club') return '$$$';
  if (type === 'bar') return '$$';
  return '$$';
}

function estimateCost(type: string, priceRange: PriceRange): number {
  const base = BASE_COST_BY_TYPE[type] ?? 10;

  if (priceRange === '$') return base;
  if (priceRange === '$$') return Math.round(base * 1.6);
  return Math.round(base * 2.5);
}

function computePopularity(
  rating?: number | null,
  reviews?: number | null,
): number {
  if (!rating) return 25;

  const reviewScore = Math.min((reviews ?? 0) / 2000, 1);

  const score =
    rating * 15 + // max ~75
    reviewScore * 40; // max 40

  return Math.min(100, Math.round(score));
}

/* =====================
   MAIN
===================== */

async function main() {
  const locations = await prisma.location.findMany({
    where: { googleImported: true },
  });

  console.log(`🔄 Enriching ${locations.length} locations...`);

  let updated = 0;

  for (const loc of locations) {
    const priceRange = inferPriceRange(loc.type, loc.rating);
    const estimatedCost = estimateCost(loc.type, priceRange);
    const popularityScore = computePopularity(loc.rating, loc.userRatingsTotal);
    const vibes = TYPE_VIBES[loc.type] ?? [];

    await prisma.location.update({
      where: { id: loc.id },
      data: {
        priceRange,
        estimatedCost,
        popularityScore,
        vibes,
      },
    });

    updated++;
    if (updated % 100 === 0) {
      console.log(`✔ Updated ${updated}/${locations.length}`);
    }
  }

  console.log('✅ Enrich completed successfully');
}

main()
  .catch((e) => {
    console.error('❌ Enrich failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
