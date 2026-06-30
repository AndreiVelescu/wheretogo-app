import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface CleanupOptions {
  // Șterge toate locațiile
  deleteAll?: boolean;
  // Șterge doar locațiile importate de la Google
  deleteGoogleImported?: boolean;
  // Șterge locațiile fără reviews/favorites/bookings
  deleteUnused?: boolean;
  // Șterge locațiile după tip specific
  deleteByType?: string;
  // Șterge locațiile fără coordonate (lat/lng)
  deleteWithoutCoordinates?: boolean;
  // Șterge locațiile fără adresă
  deleteWithoutAddress?: boolean;
  // Șterge duplicate (păstrează prima locație)
  deleteDuplicates?: boolean;
  // Mod dry-run (doar afișează ce ar șterge, fără a șterge efectiv)
  dryRun?: boolean;
}

async function cleanLocations(options: CleanupOptions) {
  console.log('🧹 Starting location cleanup...\n');

  if (options.dryRun) {
    console.log('⚠️  DRY RUN MODE - No actual deletions will be made\n');
  }

  let totalDeleted = 0;

  try {
    // Statistici inițiale
    const initialCount = await prisma.location.count();
    console.log(`📊 Total locations before cleanup: ${initialCount}\n`);

    // Șterge toate locațiile
    if (options.deleteAll) {
      console.log('🗑️  Deleting ALL locations...');

      if (!options.dryRun) {
        // Șterge mai întâi relațiile dependente
        await prisma.notification.deleteMany({
          where: { locationId: { not: null } },
        });
        await prisma.favorite.deleteMany({});
        await prisma.booking.deleteMany({});
        await prisma.event.deleteMany({});
        await prisma.review.deleteMany({});

        const result = await prisma.location.deleteMany({});
        totalDeleted = result.count;
      } else {
        totalDeleted = initialCount;
      }
      console.log(`   ✅ Would delete ${totalDeleted} locations\n`);
    }

    // Șterge locațiile importate de la Google
    if (options.deleteGoogleImported) {
      console.log('🗑️  Deleting Google imported locations...');

      const googleLocations = await prisma.location.findMany({
        where: { googleImported: true },
        select: { id: true, name: true },
      });

      if (!options.dryRun && googleLocations.length > 0) {
        const locationIds = googleLocations.map((l) => l.id);

        await prisma.notification.deleteMany({
          where: { locationId: { in: locationIds } },
        });
        await prisma.favorite.deleteMany({
          where: { locationId: { in: locationIds } },
        });
        await prisma.booking.deleteMany({
          where: { locationId: { in: locationIds } },
        });
        await prisma.event.deleteMany({
          where: { locationId: { in: locationIds } },
        });
        await prisma.review.deleteMany({
          where: { locationId: { in: locationIds } },
        });

        const result = await prisma.location.deleteMany({
          where: { googleImported: true },
        });
        totalDeleted += result.count;
      } else {
        totalDeleted += googleLocations.length;
      }

      console.log(
        `   ✅ ${options.dryRun ? 'Would delete' : 'Deleted'} ${googleLocations.length} Google imported locations\n`,
      );
      googleLocations
        .slice(0, 10)
        .forEach((l) => console.log(`      - ${l.name}`));
      if (googleLocations.length > 10)
        console.log(`      ... and ${googleLocations.length - 10} more`);
    }

    // Șterge locațiile nefolosite
    if (options.deleteUnused) {
      console.log(
        '🗑️  Deleting unused locations (no reviews, favorites, bookings, events)...',
      );

      const unusedLocations = await prisma.location.findMany({
        where: {
          reviews: { none: {} },
          favorites: { none: {} },
          bookings: { none: {} },
          events: { none: {} },
        },
        select: { id: true, name: true },
      });

      if (!options.dryRun && unusedLocations.length > 0) {
        const locationIds = unusedLocations.map((l) => l.id);

        await prisma.notification.deleteMany({
          where: { locationId: { in: locationIds } },
        });

        const result = await prisma.location.deleteMany({
          where: { id: { in: locationIds } },
        });
        totalDeleted += result.count;
      } else {
        totalDeleted += unusedLocations.length;
      }

      console.log(
        `   ✅ ${options.dryRun ? 'Would delete' : 'Deleted'} ${unusedLocations.length} unused locations\n`,
      );
      unusedLocations
        .slice(0, 10)
        .forEach((l) => console.log(`      - ${l.name}`));
      if (unusedLocations.length > 10)
        console.log(`      ... and ${unusedLocations.length - 10} more`);
    }

    // Șterge locațiile după tip
    if (options.deleteByType) {
      console.log(
        `🗑️  Deleting locations of type: "${options.deleteByType}"...`,
      );

      const typeLocations = await prisma.location.findMany({
        where: { type: options.deleteByType },
        select: { id: true, name: true },
      });

      if (!options.dryRun && typeLocations.length > 0) {
        const locationIds = typeLocations.map((l) => l.id);

        await prisma.notification.deleteMany({
          where: { locationId: { in: locationIds } },
        });
        await prisma.favorite.deleteMany({
          where: { locationId: { in: locationIds } },
        });
        await prisma.booking.deleteMany({
          where: { locationId: { in: locationIds } },
        });
        await prisma.event.deleteMany({
          where: { locationId: { in: locationIds } },
        });
        await prisma.review.deleteMany({
          where: { locationId: { in: locationIds } },
        });

        const result = await prisma.location.deleteMany({
          where: { type: options.deleteByType },
        });
        totalDeleted += result.count;
      } else {
        totalDeleted += typeLocations.length;
      }

      console.log(
        `   ✅ ${options.dryRun ? 'Would delete' : 'Deleted'} ${typeLocations.length} locations of type "${options.deleteByType}"\n`,
      );
      typeLocations
        .slice(0, 10)
        .forEach((l) => console.log(`      - ${l.name}`));
      if (typeLocations.length > 10)
        console.log(`      ... and ${typeLocations.length - 10} more`);
    }

    // Șterge locațiile fără coordonate
    if (options.deleteWithoutCoordinates) {
      console.log('🗑️  Deleting locations without coordinates...');

      const noCoordLocations = await prisma.location.findMany({
        where: {
          OR: [{ lat: null }, { lng: null }],
        },
        select: { id: true, name: true },
      });

      if (!options.dryRun && noCoordLocations.length > 0) {
        const locationIds = noCoordLocations.map((l) => l.id);

        await prisma.notification.deleteMany({
          where: { locationId: { in: locationIds } },
        });
        await prisma.favorite.deleteMany({
          where: { locationId: { in: locationIds } },
        });
        await prisma.booking.deleteMany({
          where: { locationId: { in: locationIds } },
        });
        await prisma.event.deleteMany({
          where: { locationId: { in: locationIds } },
        });
        await prisma.review.deleteMany({
          where: { locationId: { in: locationIds } },
        });

        const result = await prisma.location.deleteMany({
          where: {
            OR: [{ lat: null }, { lng: null }],
          },
        });
        totalDeleted += result.count;
      } else {
        totalDeleted += noCoordLocations.length;
      }

      console.log(
        `   ✅ ${options.dryRun ? 'Would delete' : 'Deleted'} ${noCoordLocations.length} locations without coordinates\n`,
      );
      noCoordLocations
        .slice(0, 10)
        .forEach((l) => console.log(`      - ${l.name}`));
      if (noCoordLocations.length > 10)
        console.log(`      ... and ${noCoordLocations.length - 10} more`);
    }

    // Șterge locațiile fără adresă
    if (options.deleteWithoutAddress) {
      console.log('🗑️  Deleting locations without address...');

      const noAddressLocations = await prisma.location.findMany({
        where: {
          OR: [{ address: null }, { address: '' }],
        },
        select: { id: true, name: true },
      });

      if (!options.dryRun && noAddressLocations.length > 0) {
        const locationIds = noAddressLocations.map((l) => l.id);

        await prisma.notification.deleteMany({
          where: { locationId: { in: locationIds } },
        });
        await prisma.favorite.deleteMany({
          where: { locationId: { in: locationIds } },
        });
        await prisma.booking.deleteMany({
          where: { locationId: { in: locationIds } },
        });
        await prisma.event.deleteMany({
          where: { locationId: { in: locationIds } },
        });
        await prisma.review.deleteMany({
          where: { locationId: { in: locationIds } },
        });

        const result = await prisma.location.deleteMany({
          where: {
            OR: [{ address: null }, { address: '' }],
          },
        });
        totalDeleted += result.count;
      } else {
        totalDeleted += noAddressLocations.length;
      }

      console.log(
        `   ✅ ${options.dryRun ? 'Would delete' : 'Deleted'} ${noAddressLocations.length} locations without address\n`,
      );
      noAddressLocations
        .slice(0, 10)
        .forEach((l) => console.log(`      - ${l.name}`));
      if (noAddressLocations.length > 10)
        console.log(`      ... and ${noAddressLocations.length - 10} more`);
    }

    // Șterge duplicatele
    if (options.deleteDuplicates) {
      console.log('🗑️  Finding and deleting duplicate locations...');

      const allLocations = await prisma.location.findMany({
        select: { id: true, name: true, address: true },
        orderBy: { id: 'asc' },
      });

      const seen = new Map<string, number>();
      const duplicateIds: number[] = [];

      for (const loc of allLocations) {
        const key = `${loc.name?.toLowerCase()}-${loc.address?.toLowerCase()}`;
        if (seen.has(key)) {
          duplicateIds.push(loc.id);
        } else {
          seen.set(key, loc.id);
        }
      }

      if (!options.dryRun && duplicateIds.length > 0) {
        await prisma.notification.deleteMany({
          where: { locationId: { in: duplicateIds } },
        });
        await prisma.favorite.deleteMany({
          where: { locationId: { in: duplicateIds } },
        });
        await prisma.booking.deleteMany({
          where: { locationId: { in: duplicateIds } },
        });
        await prisma.event.deleteMany({
          where: { locationId: { in: duplicateIds } },
        });
        await prisma.review.deleteMany({
          where: { locationId: { in: duplicateIds } },
        });

        const result = await prisma.location.deleteMany({
          where: { id: { in: duplicateIds } },
        });
        totalDeleted += result.count;
      } else {
        totalDeleted += duplicateIds.length;
      }

      console.log(
        `   ✅ ${options.dryRun ? 'Would delete' : 'Deleted'} ${duplicateIds.length} duplicate locations\n`,
      );
    }

    // Statistici finale
    const finalCount = await prisma.location.count();
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`📊 Summary:`);
    console.log(`   Before: ${initialCount} locations`);
    console.log(`   After:  ${finalCount} locations`);
    console.log(
      `   ${options.dryRun ? 'Would delete' : 'Deleted'}: ${totalDeleted} locations`,
    );
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  } catch (error) {
    console.error('❌ Error during cleanup:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Parsare argumente din linia de comandă
function parseArgs(): CleanupOptions {
  const args = process.argv.slice(2);
  const options: CleanupOptions = {};

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--all':
        options.deleteAll = true;
        break;
      case '--google':
        options.deleteGoogleImported = true;
        break;
      case '--unused':
        options.deleteUnused = true;
        break;
      case '--type':
        options.deleteByType = args[++i];
        break;
      case '--no-coords':
        options.deleteWithoutCoordinates = true;
        break;
      case '--no-address':
        options.deleteWithoutAddress = true;
        break;
      case '--duplicates':
        options.deleteDuplicates = true;
        break;
      case '--dry-run':
        options.dryRun = true;
        break;
      case '--help':
        printHelp();
        process.exit(0);
    }
  }

  return options;
}

function printHelp() {
  console.log(`
🧹 Location Cleanup Script
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Usage: npx ts-node clean-locations.ts [options]

Options:
  --all           Delete ALL locations (⚠️ dangerous!)
  --google        Delete only Google imported locations
  --unused        Delete locations with no reviews/favorites/bookings/events
  --type <type>   Delete locations of a specific type (e.g., "restaurant", "bar")
  --no-coords     Delete locations without coordinates (lat/lng)
  --no-address    Delete locations without an address
  --duplicates    Delete duplicate locations (keeps the first one)
  --dry-run       Preview what would be deleted without actually deleting
  --help          Show this help message

Examples:
  npx ts-node clean-locations.ts --dry-run --all
  npx ts-node clean-locations.ts --google
  npx ts-node clean-locations.ts --type "park" --dry-run
  npx ts-node clean-locations.ts --unused --duplicates
  npx ts-node clean-locations.ts --no-coords --no-address
`);
}

// Main
const options = parseArgs();

if (
  Object.keys(options).length === 0 ||
  (Object.keys(options).length === 1 && options.dryRun)
) {
  console.log(
    '⚠️  No cleanup option specified. Use --help to see available options.\n',
  );
  printHelp();
  process.exit(1);
}

cleanLocations(options);
