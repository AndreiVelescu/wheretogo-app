import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedTypes() {
  console.log('🔄 Updating locations with types array...\n');

  // Get all locations that have description but empty types
  const locations = await prisma.location.findMany({
    where: {
      types: { isEmpty: true },
    },
    select: {
      id: true,
      name: true,
      description: true,
      type: true,
    },
  });

  console.log(`Found ${locations.length} locations without types[]\n`);

  let updated = 0;
  let skipped = 0;

  for (const loc of locations) {
    // Extract types from description (was saved as "type1, type2, type3")
    let types: string[] = [];

    if (loc.description) {
      types = loc.description
        .split(',')
        .map((t) => t.trim().toLowerCase())
        .filter((t) => t.length > 0);
    }

    // If no types from description, use the main type
    if (types.length === 0 && loc.type) {
      types = [loc.type.toLowerCase()];
    }

    if (types.length > 0) {
      await prisma.location.update({
        where: { id: loc.id },
        data: { types },
      });
      updated++;
      console.log(`✅ ${loc.name}: [${types.join(', ')}]`);
    } else {
      skipped++;
      console.log(`⏭️  ${loc.name}: no types found`);
    }
  }

  console.log(`\n📊 Summary:`);
  console.log(`   Updated: ${updated}`);
  console.log(`   Skipped: ${skipped}`);
  console.log(`   Total: ${locations.length}`);
}

seedTypes()
  .catch((e) => {
    console.error('❌ Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
