import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function checkUnwanted() {
  // Check by types
  const rvParks = await prisma.location.count({ where: { type: 'rv_park' } });
  const campgrounds = await prisma.location.count({
    where: { type: 'campground' },
  });
  const waterParks = await prisma.location.count({
    where: { type: 'water_park' },
  });
  const themeParks = await prisma.location.count({
    where: { type: 'theme_park' },
  });
  const amusementParks = await prisma.location.count({
    where: { type: 'amusement_park' },
  });
  const aquariums = await prisma.location.count({
    where: { type: 'aquarium' },
  });

  console.log('=== Locations by Type ===');
  console.log(`rv_park: ${rvParks}`);
  console.log(`campground: ${campgrounds}`);
  console.log(`water_park: ${waterParks}`);
  console.log(`theme_park: ${themeParks}`);
  console.log(`amusement_park: ${amusementParks}`);
  console.log(`aquarium: ${aquariums}`);
  console.log(
    `Total unwanted by type: ${rvParks + campgrounds + waterParks + themeParks + amusementParks + aquariums}`,
  );

  // Check by name
  const parking = await prisma.location.count({
    where: { name: { contains: 'Parking' } },
  });
  const parcari = await prisma.location.count({
    where: { name: { contains: 'Parcari' } },
  });
  const carPark = await prisma.location.count({
    where: { name: { contains: 'Car Park' } },
  });

  console.log('\n=== Locations by Name ===');
  console.log(`"Parking" in name: ${parking}`);
  console.log(`"Parcari" in name: ${parcari}`);
  console.log(`"Car Park" in name: ${carPark}`);

  // Show actual rv_park locations
  const rvParkLocations = await prisma.location.findMany({
    where: { type: 'rv_park' },
    select: { id: true, name: true, type: true, address: true },
  });

  console.log('\n=== RV Park Locations ===');
  rvParkLocations.forEach((l) => {
    console.log(`- ${l.name} (${l.address})`);
  });

  await prisma.$disconnect();
}

checkUnwanted();
