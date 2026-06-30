const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const BASE_URL = 'https://maps.googleapis.com/maps/api/place/photo';

function isAbsoluteUrl(value) {
  return /^https?:\/\//i.test(value);
}

function isGooglePhotoUrl(value) {
  if (!isAbsoluteUrl(value)) {
    return false;
  }

  try {
    const url = new URL(value);
    return (
      url.hostname === 'maps.googleapis.com' &&
      url.pathname === '/maps/api/place/photo'
    );
  } catch {
    return false;
  }
}

function normalizePhoto(photo) {
  if (!photo) {
    return photo;
  }

  if (isGooglePhotoUrl(photo)) {
    try {
      const url = new URL(photo);
      const reference =
        url.searchParams.get('photoreference') ||
        url.searchParams.get('photo_reference');
      const maxWidth = url.searchParams.get('maxwidth') || '1200';

      if (!reference || !GOOGLE_API_KEY) {
        return photo;
      }

      return `${BASE_URL}?maxwidth=${maxWidth}&photoreference=${encodeURIComponent(reference)}&key=${GOOGLE_API_KEY}`;
    } catch {
      return photo;
    }
  }

  if (!isAbsoluteUrl(photo) && GOOGLE_API_KEY) {
    return `${BASE_URL}?maxwidth=1200&photoreference=${encodeURIComponent(photo)}&key=${GOOGLE_API_KEY}`;
  }

  return photo;
}

async function main() {
  const locations = await prisma.location.findMany({
    where: { photos: { isEmpty: false } },
    select: { id: true, name: true, photos: true },
  });

  let updated = 0;

  for (const location of locations) {
    const nextPhotos = (location.photos || []).map(normalizePhoto);
    const changed =
      JSON.stringify(nextPhotos) !== JSON.stringify(location.photos || []);

    if (!changed) {
      continue;
    }

    await prisma.location.update({
      where: { id: location.id },
      data: { photos: nextPhotos },
    });

    updated += 1;
  }

  console.log(JSON.stringify({ updated, total: locations.length }, null, 2));
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
