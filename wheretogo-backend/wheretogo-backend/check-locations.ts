import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function checkLocations() {
  const locations = await prisma.location.findMany({
    select: { id: true, name: true, type: true, address: true },
  });

  console.log('Total locations:', locations.length);

  const types = [...new Set(locations.map((l) => l.type))];
  console.log('\nUnique types:', types);

  console.log('\n=== All Locations ===');
  locations.forEach((l) => {
    console.log(
      `- ${l.name} (type: "${l.type}") - ${l.address || 'No address'}`,
    );
  });

  await prisma.$disconnect();
}

checkLocations();
