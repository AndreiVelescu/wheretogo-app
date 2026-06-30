import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

function computePopularity(
  rating?: number | null,
  userRatingsTotal?: number | null,
): number {
  if (!rating || !userRatingsTotal) return 10;
  const score = rating * Math.log10(userRatingsTotal + 1) * 10;
  return Math.min(100, Math.round(score));
}

function inferPriceRange(type: string, popularity: number): string {
  if (type.includes('fast') || type.includes('kebab')) return 'LOW';
  if (popularity > 70) return 'HIGH';
  if (popularity > 40) return 'MEDIUM';
  return 'LOW';
}

function estimateCost(priceRange: string): number {
  switch (priceRange) {
    case 'LOW':
      return 80 + Math.random() * 40; // 80–120 MDL
    case 'MEDIUM':
      return 150 + Math.random() * 100; // 150–250 MDL
    case 'HIGH':
      return 300 + Math.random() * 200; // 300–500 MDL
    default:
      return 100;
  }
}

function inferVibes(type: string): string[] {
  const vibes = new Set<string>();
  const t = type.toLowerCase();

  if (t.includes('cafe')) vibes.add('chill');
  if (t.includes('bar')) vibes.add('romantic');
  if (t.includes('restaurant')) vibes.add('social');
  if (t.includes('fast') || t.includes('kebab')) vibes.add('quick');
  if (t.includes('club')) vibes.add('party');

  if (vibes.size === 0) vibes.add('casual');

  return Array.from(vibes);
}

async function enrichLocations() {
  const locations = await prisma.location.findMany({
    where: { googleImported: true },
  });

  console.log(`🔧 Enriching ${locations.length} locations`);

  for (const loc of locations) {
    const popularity = computePopularity(loc.rating, loc.userRatingsTotal);

    const priceRange = loc.priceRange ?? inferPriceRange(loc.type, popularity);

    const estimatedCost = loc.estimatedCost ?? estimateCost(priceRange);

    const vibes = loc.vibes.length > 0 ? loc.vibes : inferVibes(loc.type);

    await prisma.location.update({
      where: { id: loc.id },
      data: {
        popularityScore: popularity,
        priceRange,
        estimatedCost,
        vibes,
      },
    });
  }

  console.log('✅ Location enrichment done');
}

enrichLocations()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
