const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
// Places API (New). The legacy maps/api/place/photo endpoint is retired and
// now returns HTTP 400, so we fetch fresh photo resource names here.
const DETAILS_URL = 'https://places.googleapis.com/v1/places';
const MEDIA_BASE = 'https://places.googleapis.com/v1';
const MAX_WIDTH = 1200;
const MAX_PHOTOS = 10;
const DELAY_MS = 150;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function buildPhotoUrl(photoName, maxWidth = MAX_WIDTH) {
  return `${MEDIA_BASE}/${photoName}/media?maxWidthPx=${maxWidth}&key=${GOOGLE_API_KEY}`;
}

async function fetchPlacePhotos(placeId) {
  const response = await fetch(`${DETAILS_URL}/${placeId}`, {
    headers: {
      'X-Goog-Api-Key': GOOGLE_API_KEY,
      'X-Goog-FieldMask': 'photos',
    },
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`HTTP ${response.status}: ${body.slice(0, 120)}`);
  }

  const data = await response.json();

  return (data.photos || [])
    .map((photo) => photo.name) // "places/<id>/photos/<ref>"
    .filter((name) => typeof name === 'string' && !!name)
    .slice(0, MAX_PHOTOS)
    .map((name) => buildPhotoUrl(name));
}

async function main() {
  if (!GOOGLE_API_KEY) {
    throw new Error('GOOGLE_API_KEY is not configured');
  }

  const locations = await prisma.location.findMany({
    where: {
      googleImported: true,
      placeId: { not: null },
    },
    select: {
      id: true,
      name: true,
      placeId: true,
      photos: true,
    },
    orderBy: { id: 'asc' },
  });

  let updated = 0;
  let skipped = 0;
  const failures = [];

  for (const location of locations) {
    try {
      const nextPhotos = await fetchPlacePhotos(location.placeId);
      if (!nextPhotos.length) {
        skipped += 1;
        await sleep(DELAY_MS);
        continue;
      }

      const changed =
        JSON.stringify(nextPhotos) !== JSON.stringify(location.photos || []);
      if (!changed) {
        skipped += 1;
        await sleep(DELAY_MS);
        continue;
      }

      await prisma.location.update({
        where: { id: location.id },
        data: { photos: nextPhotos },
      });
      updated += 1;
    } catch (error) {
      failures.push({
        id: location.id,
        name: location.name,
        placeId: location.placeId,
        error: error instanceof Error ? error.message : String(error),
      });
    }

    await sleep(DELAY_MS);
  }

  console.log(
    JSON.stringify(
      {
        total: locations.length,
        updated,
        skipped,
        failed: failures.length,
        failures: failures.slice(0, 20),
      },
      null,
      2,
    ),
  );
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
