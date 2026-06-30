import { PrismaClient, UserRole, BookingStatus } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seeding...');

  // Clear existing data (optional - remove if you want to keep existing data)
  await prisma.notification.deleteMany({});
  await prisma.follower.deleteMany({});
  await prisma.favorite.deleteMany({});
  await prisma.booking.deleteMany({});
  await prisma.event.deleteMany({});
  await prisma.review.deleteMany({});
  await prisma.location.deleteMany({});
  await prisma.user.deleteMany({});

  // Create test users
  const hashedPassword = await bcrypt.hash('password123', 10);

  const admin = await prisma.user.create({
    data: {
      email: 'admin@wheretogo.com',
      name: 'Admin User',
      password: hashedPassword,
      role: UserRole.ADMIN,
    },
  });

  const businessUser = await prisma.user.create({
    data: {
      email: 'business@wheretogo.com',
      name: 'Maria Popescu',
      password: hashedPassword,
      role: UserRole.BUSINESS,
    },
  });

  const businessUser2 = await prisma.user.create({
    data: {
      email: 'chef@wheretogo.com',
      name: 'Chef Antonio',
      password: hashedPassword,
      role: UserRole.BUSINESS,
    },
  });

  const users = [
    {
      email: 'alex.ionescu@gmail.com',
      name: 'Alex Ionescu',
      password: hashedPassword,
      role: UserRole.USER,
    },
    {
      email: 'ana.popa@yahoo.com',
      name: 'Ana Popa',
      password: hashedPassword,
      role: UserRole.USER,
    },
    {
      email: 'mihai.stefan@outlook.com',
      name: 'Mihai Ștefan',
      password: hashedPassword,
      role: UserRole.USER,
    },
    {
      email: 'diana.radu@gmail.com',
      name: 'Diana Radu',
      password: hashedPassword,
      role: UserRole.USER,
    },
    {
      email: 'vlad.gheorghe@gmail.com',
      name: 'Vlad Gheorghe',
      password: hashedPassword,
      role: UserRole.USER,
    },
    {
      email: 'laura.marinescu@yahoo.com',
      name: 'Laura Marinescu',
      password: hashedPassword,
      role: UserRole.USER,
    },
  ];

  const createdUsers: any[] = [];
  for (const userData of users) {
    const user = await prisma.user.create({
      data: userData,
    });
    createdUsers.push(user);
  }

  console.log('✅ Users created');

  // Create comprehensive locations
  const locations = [
    {
      name: 'La Trattoria di Nonna',
      description:
        'Autentică bucătărie italiană cu rețete tradiționale din regiunea Toscana. Pasta făcută în casă zilnic și selecție excelentă de vinuri italiene.',
      type: 'restaurant',
      priceRange: '$$$',
      vibes: ['romantic', 'fancy', 'intimate', 'traditional'],
      address: 'Str. Giuseppe Garibaldi 15, Centrul Vechi, București',
      openHours: 'Lun-Joi: 12:00-23:00, Vin-Sâm: 12:00-24:00, Dum: 12:00-22:00',
      photos: [
        'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800',
        'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800',
        'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
      ],
      menuPdf: 'https://example.com/menu-trattoria.pdf',
    },
    {
      name: 'Craft & Co. Brewery',
      description:
        'Prima berărie artizanală din București cu 12 sortimente proprii de bere la butuc. Atmosferă relaxantă și mâncare de pub gourmet.',
      type: 'bar',
      priceRange: '$$',
      vibes: ['casual', 'friendly', 'lively', 'craft'],
      address: 'Calea Victoriei 87, București',
      openHours:
        'Mar-Joi: 16:00-01:00, Vin-Sâm: 16:00-03:00, Dum: 14:00-24:00, Lun: închis',
      photos: [
        'https://images.unsplash.com/photo-1436076863939-06870fe779c2?w=800',
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
        'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=800',
      ],
    },
    {
      name: 'Morning Glory Café',
      description:
        'Cafeneaua perfectă pentru dimineața ta! Cafea de specialitate, brunching delicios și atmosferă caldă cu wifi gratuit.',
      type: 'cafe',
      priceRange: '$',
      vibes: ['casual', 'quiet', 'family-friendly', 'cozy', 'work-friendly'],
      address: 'Bd. Magheru 32, București',
      openHours: 'Lun-Vin: 07:00-18:00, Sâm-Dum: 08:00-19:00',
      photos: [
        'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800',
        'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800',
        'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800',
      ],
    },
    {
      name: 'NEON Underground',
      description:
        'Cel mai hot club din București! DJ-i internationali, cocktail-uri semnătură și sound system de ultima generație.',
      type: 'club',
      priceRange: '$$$$',
      vibes: ['energetic', 'trendy', 'party', 'exclusive', 'late-night'],
      address: 'Str. Blanari 14, Centrul Vechi, București',
      openHours:
        'Joi: 22:00-05:00, Vin-Sâm: 22:00-06:00, celelalte zile: închis',
      photos: [
        'https://images.unsplash.com/photo-1566737236500-c8ac43014a8e?w=800',
        'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800',
      ],
    },
    {
      name: 'Sushi Zen',
      description:
        'Experiență autentică japoneză cu sushi master direct din Tokyo. Ingrediente fresh zilnic și sake premium.',
      type: 'restaurant',
      priceRange: '$$$$',
      vibes: ['fancy', 'quiet', 'authentic', 'modern', 'intimate'],
      address: 'Str. Franceza 62, București',
      openHours: 'Mar-Dum: 18:00-23:00, Lun: închis',
      photos: [
        'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800',
        'https://images.unsplash.com/photo-1563612116625-3012372fccce?w=800',
      ],
    },
    {
      name: 'The Rooftop Terrace',
      description:
        'Bar cu cea mai spectaculoasă vedere asupra orașului. Cocktail-uri creative și muzică lounge în atmosferă sofisticată.',
      type: 'bar',
      priceRange: '$$$',
      vibes: ['fancy', 'romantic', 'scenic', 'sophisticated', 'outdoor'],
      address: 'Hotel Intercontinental, Et. 20, București',
      openHours: 'Lun-Dum: 17:00-02:00',
      photos: [
        'https://images.unsplash.com/photo-1574418440404-c89a9e67fc92?w=800',
        'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800',
      ],
    },
    {
      name: 'Bistro Verde',
      description:
        'Restaurant vegan gourmet cu ingrediente organice locale. Meniuri sezoniere creative și opțiuni raw-vegan.',
      type: 'restaurant',
      priceRange: '$$',
      vibes: ['healthy', 'modern', 'eco-friendly', 'casual', 'trendy'],
      address: 'Str. Amzei 43, București',
      openHours: 'Lun-Sâm: 11:00-22:00, Dum: 11:00-21:00',
      photos: [
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800',
        'https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=800',
      ],
    },
    {
      name: 'Book & Bean',
      description:
        'Librărie-cafenea unică cu colecție vast de cărți și cafea artizanală. Evenimente literare și sesiuni de lectură.',
      type: 'cafe',
      priceRange: '$',
      vibes: ['quiet', 'cozy', 'intellectual', 'family-friendly', 'artistic'],
      address: 'Str. Lipscani 55, București',
      openHours: 'Lun-Dum: 09:00-22:00',
      photos: [
        'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
      ],
    },
  ];

  const createdLocations: any[] = [];
  for (const location of locations) {
    const createdLocation = await prisma.location.create({
      data: location,
    });
    createdLocations.push(createdLocation);
  }

  console.log('✅ Locations created');

  // Create diverse reviews
  const reviewsData = [
    // La Trattoria di Nonna reviews
    {
      userId: createdUsers[0].id,
      locationId: createdLocations[0].id,
      rating: 5,
      comment:
        'Cea mai bună paste carbonara din București! Servirea impecabilă și atmosfera perfectă pentru o cină romantică.',
      likes: 23,
    },
    {
      userId: createdUsers[1].id,
      locationId: createdLocations[0].id,
      rating: 4,
      comment:
        'Mâncare delicioasă, dar prețurile sunt cam piperate. Merită totuși pentru ocazii speciale.',
      likes: 15,
    },
    {
      userId: createdUsers[2].id,
      locationId: createdLocations[0].id,
      rating: 5,
      comment:
        'Am fost surprins de autenticitatea bucătăriei! Chef-ul chiar este din Italia. Recomand 100%!',
      likes: 31,
    },
    // Craft & Co. reviews
    {
      userId: createdUsers[3].id,
      locationId: createdLocations[1].id,
      rating: 5,
      comment:
        'Berea IPA de casă este fenomenală! Atmosfera perfectă pentru ieșiri cu prietenii.',
      likes: 18,
    },
    {
      userId: createdUsers[4].id,
      locationId: createdLocations[1].id,
      rating: 4,
      comment:
        'Selecție variată de beri artizanale. Mâncarea este ok, dar berea e vedeta.',
      likes: 12,
    },
    // Morning Glory Café reviews
    {
      userId: createdUsers[5].id,
      locationId: createdLocations[2].id,
      rating: 5,
      comment:
        'Cafeaua perfectă pentru dimineața! Barista-ii sunt profesioniști și croissant-urile proaspete.',
      likes: 8,
    },
    {
      userId: businessUser.id,
      locationId: createdLocations[2].id,
      rating: 4,
      comment:
        'Locul meu preferat pentru întâlniri de business. Wifi rapid și atmosferă liniștită.',
      likes: 6,
    },
    // NEON reviews
    {
      userId: createdUsers[0].id,
      locationId: createdLocations[3].id,
      rating: 5,
      comment:
        'Cel mai tare club din oraș! DJ-ii sunt incredibili și cocktail-urile sunt o artă.',
      likes: 45,
    },
    // Sushi Zen reviews
    {
      userId: createdUsers[2].id,
      locationId: createdLocations[4].id,
      rating: 5,
      comment:
        'Sushi autentic japonez! Peștele este incredibil de fresh, iar prezentarea ca într-un restaurant din Tokyo.',
      likes: 27,
    },
    {
      userId: createdUsers[4].id,
      locationId: createdLocations[4].id,
      rating: 4,
      comment: 'Scump dar merită fiecare leu. Experiență culinară de neuitat.',
      likes: 19,
    },
    // More reviews for other locations
    {
      userId: createdUsers[1].id,
      locationId: createdLocations[5].id,
      rating: 5,
      comment:
        'Cea mai spectaculoasă vedere din București! Cocktail-urile sunt pe măsură.',
      likes: 33,
    },
    {
      userId: createdUsers[3].id,
      locationId: createdLocations[6].id,
      rating: 5,
      comment:
        'Mâncare vegan delicioasă! Chiar și carnivori ca mine sunt impresionați.',
      likes: 14,
    },
    {
      userId: createdUsers[5].id,
      locationId: createdLocations[7].id,
      rating: 4,
      comment:
        'Conceptul perfect! Cafea bună și cărți noi de descoperit. Petrecute ore întregi aici.',
      likes: 9,
    },
  ];

  for (const review of reviewsData) {
    await prisma.review.create({
      data: review,
    });
  }

  console.log('✅ Reviews created');

  // Create events for next weeks
  const eventsData = [
    {
      locationId: createdLocations[0].id,
      name: 'Seară de Degustare Vinuri Toscane',
      description:
        'Degustare exclusivă de vinuri din regiunea Toscana, însoțită de aperitive tradiționale italiene. Prezentare de sommelier certificat.',
      date: new Date('2024-12-15T19:00:00Z'),
      notify: true,
    },
    {
      locationId: createdLocations[0].id,
      name: 'Masterclass Pasta Making',
      description:
        'Învață să faci pasta autentică italiană alături de chef-ul nostru! Include degustare și rețete de luat acasă.',
      date: new Date('2024-12-22T16:00:00Z'),
      notify: true,
    },
    {
      locationId: createdLocations[1].id,
      name: 'Live Jazz & Craft Beer',
      description:
        'Trupa de jazz „Bucharest Blues" cântă live! Atmosferă relaxantă cu berea noastră artizanală.',
      date: new Date('2024-12-13T20:00:00Z'),
      notify: true,
    },
    {
      locationId: createdLocations[1].id,
      name: 'Beer Tasting Night',
      description:
        'Degustare ghidată a tuturor sortimentelor noastre de bere cu explicații despre procesul de fabricație.',
      date: new Date('2024-12-20T18:00:00Z'),
      notify: true,
    },
    {
      locationId: createdLocations[3].id,
      name: 'International DJ Night',
      description:
        'DJ Martin Garrix vine la București! Cea mai tare petrecere a anului cu sound system premium.',
      date: new Date('2024-12-28T22:00:00Z'),
      notify: true,
    },
    {
      locationId: createdLocations[3].id,
      name: "New Year's Eve Extravaganza",
      description:
        'Întâmpină Anul Nou în stilul NEON! Party epic cu artificii, champagne și surprize.',
      date: new Date('2024-12-31T22:00:00Z'),
      notify: true,
    },
    {
      locationId: createdLocations[4].id,
      name: 'Sushi Masterclass cu Chef Tanaka',
      description:
        'Workshop exclusiv de preparare sushi cu maestrul Tanaka, direct din Tokyo.',
      date: new Date('2024-12-18T17:00:00Z'),
      notify: true,
    },
    {
      locationId: createdLocations[6].id,
      name: 'Vegan Cooking Workshop',
      description:
        'Învață să prepari mâncăruri vegan delicioase! Workshop interactiv cu chef-ul nostru.',
      date: new Date('2024-12-16T14:00:00Z'),
      notify: true,
    },
    {
      locationId: createdLocations[7].id,
      name: 'Seară Literară cu Autori Români',
      description:
        'Întâlnire cu scriitori contemporani români. Lansări de cărți și sesiune de autografe.',
      date: new Date('2024-12-19T18:30:00Z'),
      notify: true,
    },
  ];

  for (const event of eventsData) {
    await prisma.event.create({
      data: event,
    });
  }

  console.log('✅ Events created');

  // Create bookings
  const bookingsData = [
    {
      userId: createdUsers[0].id,
      locationId: createdLocations[0].id,
      date: new Date('2024-12-08T19:30:00Z'),
      time: '19:30',
      persons: 2,
      status: BookingStatus.CONFIRMED,
      affiliateUrl: 'https://booking.com/restaurant/la-trattoria-nonna',
    },
    {
      userId: createdUsers[1].id,
      locationId: createdLocations[4].id,
      date: new Date('2024-12-10T20:00:00Z'),
      time: '20:00',
      persons: 4,
      status: BookingStatus.CONFIRMED,
      affiliateUrl: 'https://booking.com/restaurant/sushi-zen',
    },
    {
      userId: createdUsers[2].id,
      locationId: createdLocations[2].id,
      date: new Date('2024-12-07T10:00:00Z'),
      time: '10:00',
      persons: 1,
      status: BookingStatus.CONFIRMED,
    },
    {
      userId: createdUsers[3].id,
      locationId: createdLocations[6].id,
      date: new Date('2024-12-12T13:00:00Z'),
      time: '13:00',
      persons: 3,
      status: BookingStatus.PENDING,
    },
    {
      userId: createdUsers[4].id,
      locationId: createdLocations[1].id,
      date: new Date('2024-12-14T18:00:00Z'),
      time: '18:00',
      persons: 6,
      status: BookingStatus.CONFIRMED,
    },
    {
      userId: createdUsers[5].id,
      locationId: createdLocations[5].id,
      date: new Date('2024-12-21T19:00:00Z'),
      time: '19:00',
      persons: 2,
      status: BookingStatus.PENDING,
    },
  ];

  for (const booking of bookingsData) {
    await prisma.booking.create({
      data: booking,
    });
  }

  console.log('✅ Bookings created');

  // Create favorites
  const favoritesData = [
    { userId: createdUsers[0].id, locationId: createdLocations[0].id },
    { userId: createdUsers[0].id, locationId: createdLocations[3].id },
    { userId: createdUsers[0].id, locationId: createdLocations[5].id },
    { userId: createdUsers[1].id, locationId: createdLocations[2].id },
    { userId: createdUsers[1].id, locationId: createdLocations[4].id },
    { userId: createdUsers[2].id, locationId: createdLocations[1].id },
    { userId: createdUsers[2].id, locationId: createdLocations[6].id },
    { userId: createdUsers[3].id, locationId: createdLocations[7].id },
    { userId: createdUsers[4].id, locationId: createdLocations[0].id },
    { userId: createdUsers[5].id, locationId: createdLocations[3].id },
  ];

  for (const favorite of favoritesData) {
    await prisma.favorite.create({
      data: favorite,
    });
  }

  console.log('✅ Favorites created');

  // Create follow relationships
  const followsData = [
    { userId: createdUsers[1].id, followerId: createdUsers[0].id },
    { userId: createdUsers[2].id, followerId: createdUsers[0].id },
    { userId: createdUsers[0].id, followerId: createdUsers[1].id },
    { userId: createdUsers[3].id, followerId: createdUsers[1].id },
    { userId: createdUsers[4].id, followerId: createdUsers[2].id },
    { userId: createdUsers[5].id, followerId: createdUsers[2].id },
    { userId: businessUser.id, followerId: createdUsers[3].id },
    { userId: businessUser2.id, followerId: createdUsers[4].id },
  ];

  for (const follow of followsData) {
    await prisma.follower.create({
      data: follow,
    });
  }

  console.log('✅ Follow relationships created');

  // Create notifications (using new NotificationType enum)
  const notificationsData = [
    {
      userId: createdUsers[0].id,
      title: 'Nou eveniment la favorita ta!',
      body: 'La Trattoria di Nonna organizează o seară de degustare vinuri pe 15 decembrie.',
      type: 'LOCATION_UPDATE' as const,
      isRead: false,
      locationId: createdLocations[0].id,
      eventId: 1,
    },
    {
      userId: createdUsers[1].id,
      title: 'Rezervarea ta a fost confirmată',
      body: 'Rezervarea pentru Sushi Zen pe 10 decembrie a fost confirmată.',
      type: 'BOOKING_CONFIRMED' as const,
      isRead: false,
      locationId: createdLocations[4].id,
    },
    {
      userId: createdUsers[2].id,
      title: 'Review nou la locația urmărită',
      body: 'Cineva a lăsat un review de 5 stele la Craft & Co. Brewery.',
      type: 'NEW_REVIEW' as const,
      isRead: true,
      locationId: createdLocations[1].id,
    },
    {
      userId: createdUsers[3].id,
      title: 'Trending acum',
      body: 'NEON Underground este trending! Vezi ce spun oamenii.',
      type: 'PROMO' as const,
      isRead: false,
      locationId: createdLocations[3].id,
    },
  ];

  for (const notification of notificationsData) {
    await prisma.notification.create({
      data: notification,
    });
  }

  console.log('✅ Notifications created');

  console.log('🎉 Database seeding completed successfully!');
  console.log(`
  📊 STATISTICI BAZĂ DE DATE:
  
  👥 Utilizatori: ${3 + users.length} (${users.length} regulari + 3 speciali)
  🏢 Locații: ${locations.length} (restaurante, baruri, cafenele, cluburi)
  ⭐ Review-uri: ${reviewsData.length} cu rating-uri diverse
  🎉 Evenimente: ${eventsData.length} pentru următoarele săptămâni
  📅 Rezervări: ${bookingsData.length} cu statusuri diferite
  ❤️ Favorite: ${favoritesData.length} relații user-locație
  👥 Follow-uri: ${followsData.length} relații sociale
  🔔 Notificări: ${notificationsData.length} de diverse tipuri
  
  🔐 CONTURI DE TEST:
  - Admin: admin@wheretogo.com / password123
  - Business: business@wheretogo.com / password123  
  - Business2: chef@wheretogo.com / password123
  - User1: alex.ionescu@gmail.com / password123
  - User2: ana.popa@yahoo.com / password123
  - User3: mihai.stefan@outlook.com / password123
  - User4: diana.radu@gmail.com / password123
  - User5: vlad.gheorghe@gmail.com / password123
  - User6: laura.marinescu@yahoo.com / password123
  
  🎯 TIPURI DE LOCAȚII:
  - Restaurant italian premium (La Trattoria di Nonna)
  - Berărie artizanală (Craft & Co. Brewery)  
  - Cafenea relaxantă (Morning Glory Café)
  - Club exclusivist (NEON Underground)
  - Restaurant sushi premium (Sushi Zen)
  - Rooftop bar elegant (The Rooftop Terrace)
  - Restaurant vegan (Bistro Verde)
  - Librărie-cafenea (Book & Bean)
  
  ✨ Toate datele sunt în limba română și reprezintă locații realiste din București!
  `);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
