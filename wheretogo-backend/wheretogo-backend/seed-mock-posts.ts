import {
  MediaType,
  PostType,
  PostVisibility,
  PrismaClient,
  UserRole,
} from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const TARGET_EMAIL = 'happyander70@gmail.com';
const LEGACY_EMAIL = 'happyandeer70@gmail.com';
const DEFAULT_PASSWORD = 'password123';

const LEGACY_MOCK_TITLES = [
  'Sunrise coffee run and quiet planning hour',
  'Dinner spot that actually feels special',
  'Three places I would actually recommend for a low-stress Saturday',
  'Bookstore café reset after a crowded day',
];

type MockMediaDefinition = {
  type: MediaType;
  url: string;
  thumbnail?: string;
  width?: number;
  height?: number;
  duration?: number;
};

type MockCommentDefinition = {
  authorEmail: string;
  content: string;
};

type MockPostDefinition = {
  title: string;
  description: string;
  type: PostType;
  tags: string[];
  locationName?: string;
  media: MockMediaDefinition[];
  likedBy: string[];
  comments: MockCommentDefinition[];
  sharesCount: number;
  viewsCount: number;
  publishedAtOffsetDays: number;
};

const supportingUsers = [
  {
    email: 'alex.ionescu@gmail.com',
    name: 'Alex Ionescu',
    nickname: 'alexion',
    bio: 'Imi plac locurile simple, bine facute si traseele de weekend fara aglomeratie.',
  },
  {
    email: 'ana.popa@yahoo.com',
    name: 'Ana Popa',
    nickname: 'anapopa',
    bio: 'Cafenele bune, brunch, librarii si locuri in care poti sta fara graba.',
  },
  {
    email: 'mihai.stefan@outlook.com',
    name: 'Mihai Stefan',
    nickname: 'mihaistefan',
    bio: 'Ma uit mai mult la atmosfera decat la hype.',
  },
  {
    email: 'diana.radu@gmail.com',
    name: 'Diana Radu',
    nickname: 'dianaradu',
    bio: 'Imi plac locurile fotogenice, dar mai ales cele la care chiar vrei sa revii.',
  },
  {
    email: 'vlad.gheorghe@gmail.com',
    name: 'Vlad Gheorghe',
    nickname: 'vladg',
    bio: 'Bun la recomandari rapide pentru seri in oras si iesiri spontane.',
  },
  {
    email: 'laura.marinescu@yahoo.com',
    name: 'Laura Marinescu',
    nickname: 'lauramarinescu',
    bio: 'Imi plac restaurantele bune, rooftop-urile si locurile cu vibe calm.',
  },
  {
    email: 'sorin.travel@gmail.com',
    name: 'Sorin Pavel',
    nickname: 'sorintravel',
    bio: 'Incerc mereu rute simple si recomandari care chiar ajuta.',
  },
  {
    email: 'irina.weekend@gmail.com',
    name: 'Irina Matei',
    nickname: 'irinaweekend',
    bio: 'Weekend plans, city breaks si locuri bune pentru o pauza scurta.',
  },
];

const mockPosts: MockPostDefinition[] = [
  {
    title: 'Cafea buna si un inceput de zi fara graba',
    description:
      'Morning Glory Cafe a fost exact genul de loc de care aveam nevoie pentru un inceput linistit de zi: lumina naturala, cafea foarte buna, Wi-Fi rapid si suficienta liniste cat sa-mi pun in ordine planurile pentru weekend. Daca vrei un loc calm inainte de o zi plina prin oras, merita salvat.',
    type: PostType.EXPERIENCE,
    tags: ['cafea', 'bucuresti', 'dimineata', 'work-friendly'],
    locationName: 'Morning Glory Café',
    media: [
      {
        type: MediaType.IMAGE,
        url: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1400&q=80',
        width: 1400,
        height: 1800,
      },
      {
        type: MediaType.IMAGE,
        url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=80',
        width: 1400,
        height: 1800,
      },
    ],
    likedBy: [
      'alex.ionescu@gmail.com',
      'ana.popa@yahoo.com',
      'mihai.stefan@outlook.com',
      'irina.weekend@gmail.com',
    ],
    comments: [
      {
        authorEmail: 'ana.popa@yahoo.com',
        content:
          'Mi-a placut si mie mult aici. E unul dintre putinele locuri unde chiar poti lucra linistit dimineata.',
      },
      {
        authorEmail: 'vlad.gheorghe@gmail.com',
        content:
          'Confirm pentru cafea si atmosfera. Merita si pentru intalniri scurte de dimineata.',
      },
    ],
    sharesCount: 3,
    viewsCount: 412,
    publishedAtOffsetDays: 1,
  },
  {
    title: 'Un loc de cina care chiar are atmosfera',
    description:
      'La Trattoria di Nonna este unul dintre locurile care reusesc sa fie si calde, si elegante in acelasi timp. Pastele facute in casa au fost punctul forte, dar sincer ritmul cinei si atmosfera au facut seara sa para mai memorabila decat meniul in sine.',
    type: PostType.EXPERIENCE,
    tags: ['cina', 'mancare-italiana', 'date-night', 'ghid-de-oras'],
    locationName: 'La Trattoria di Nonna',
    media: [
      {
        type: MediaType.IMAGE,
        url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=80',
        width: 1400,
        height: 1750,
      },
      {
        type: MediaType.IMAGE,
        url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80',
        width: 1400,
        height: 1750,
      },
    ],
    likedBy: [
      'alex.ionescu@gmail.com',
      'diana.radu@gmail.com',
      'laura.marinescu@yahoo.com',
      'sorin.travel@gmail.com',
      'irina.weekend@gmail.com',
    ],
    comments: [
      {
        authorEmail: 'diana.radu@gmail.com',
        content:
          'Arata foarte bine. Ma intereseaza daca trebuie rezervare pentru seara.',
      },
      {
        authorEmail: 'laura.marinescu@yahoo.com',
        content: 'Da, mai ales vineri sau sambata. Dar atmosfera merita clar.',
      },
      {
        authorEmail: 'sorin.travel@gmail.com',
        content:
          'Genul de recomandare care chiar ajuta cand vrei o cina buna fara sa nimeresti intr-un loc generic.',
      },
    ],
    sharesCount: 8,
    viewsCount: 690,
    publishedAtOffsetDays: 3,
  },
  {
    title: 'Trei locuri pe care le-as recomanda pentru o sambata lejera',
    description:
      'Daca vrei un traseu simplu prin oras, fara sa complici prea mult planul, incepe cu o cafea la Morning Glory Cafe, continua cu un pranz usor la Bistro Verde si incheie cu apusul la The Rooftop Terrace. Ruta e usoara, vibe-ul ramane placut si niciun loc nu pare facut doar pentru turisti.',
    type: PostType.TIP,
    tags: ['plan-de-weekend', 'travel-tip', 'ghid-bucuresti', 'slow-travel'],
    locationName: 'The Rooftop Terrace',
    media: [
      {
        type: MediaType.IMAGE,
        url: 'https://images.unsplash.com/photo-1574418440404-c89a9e67fc92?auto=format&fit=crop&w=1400&q=80',
        width: 1400,
        height: 1860,
      },
    ],
    likedBy: [
      'ana.popa@yahoo.com',
      'mihai.stefan@outlook.com',
      'vlad.gheorghe@gmail.com',
      'sorin.travel@gmail.com',
      'irina.weekend@gmail.com',
    ],
    comments: [
      {
        authorEmail: 'mihai.stefan@outlook.com',
        content:
          'Imi place ca e un plan realist, nu doar lista de locuri aruncate la intamplare.',
      },
      {
        authorEmail: 'irina.weekend@gmail.com',
        content:
          'Chiar o sa-l incerc weekendul viitor. Suna foarte bine ca ritm.',
      },
    ],
    sharesCount: 12,
    viewsCount: 803,
    publishedAtOffsetDays: 5,
  },
  {
    title: 'Pauza perfecta dupa o zi aglomerata prin centru',
    description:
      'Book & Bean s-a dovedit a fi cel mai bun loc pentru reset dupa o dupa-amiaza aglomerata in centru. Espresso bun, colturi confortabile, oameni care chiar citesc si suficient spatiu cat sa incetinesti ritmul macar pentru o ora inainte sa pleci din nou prin oras.',
    type: PostType.EXPERIENCE,
    tags: ['book-cafe', 'locuri-cozy', 'timp-cu-tine', 'hidden-gems'],
    locationName: 'Book & Bean',
    media: [
      {
        type: MediaType.IMAGE,
        url: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1400&q=80',
        width: 1400,
        height: 1800,
      },
      {
        type: MediaType.IMAGE,
        url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1400&q=80',
        width: 1400,
        height: 1800,
      },
    ],
    likedBy: [
      'alex.ionescu@gmail.com',
      'ana.popa@yahoo.com',
      'diana.radu@gmail.com',
    ],
    comments: [
      {
        authorEmail: 'alex.ionescu@gmail.com',
        content:
          'Asta chiar suna a loc bun pentru o pauza fara zgomot si agitatie.',
      },
    ],
    sharesCount: 2,
    viewsCount: 301,
    publishedAtOffsetDays: 7,
  },
  {
    title: 'Brunch simplu, bun si fara pretentii inutile',
    description:
      'La Bistro Verde am prins unul dintre putinele brunch-uri care par gandite pentru oameni normali, nu doar pentru poze. Meniu curat, ingrediente proaspete si un vibe relaxat care merge perfect pentru o iesire de sambata la pranz.',
    type: PostType.EXPERIENCE,
    tags: ['brunch', 'verde', 'weekend', 'pranz'],
    locationName: 'Bistro Verde',
    media: [
      {
        type: MediaType.IMAGE,
        url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1400&q=80',
        width: 1400,
        height: 1800,
      },
      {
        type: MediaType.IMAGE,
        url: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&w=1400&q=80',
        width: 1400,
        height: 1800,
      },
    ],
    likedBy: [
      'ana.popa@yahoo.com',
      'laura.marinescu@yahoo.com',
      'irina.weekend@gmail.com',
      'sorin.travel@gmail.com',
    ],
    comments: [
      {
        authorEmail: 'laura.marinescu@yahoo.com',
        content:
          'Aici mi-a placut si mie ca nu incearca prea tare sa impresioneze. Pur si simplu e bun.',
      },
      {
        authorEmail: 'irina.weekend@gmail.com',
        content:
          'Exact genul de loc pe care il cauti cand vrei brunch fara cozi si haos.',
      },
    ],
    sharesCount: 4,
    viewsCount: 358,
    publishedAtOffsetDays: 8,
  },
  {
    title: 'Seara relaxata pe rooftop, fara sa simti ca e prea mult',
    description:
      'The Rooftop Terrace are vedere foarte buna, dar ce mi-a placut mai mult a fost ca nu cade in zona aia de locuri care incearca sa fie exclusiviste cu orice pret. Daca mergi la apus si alegi o masa mai retrasa, iese una dintre cele mai placute seri din oras.',
    type: PostType.EXPERIENCE,
    tags: ['rooftop', 'apus', 'cocktail', 'seara'],
    locationName: 'The Rooftop Terrace',
    media: [
      {
        type: MediaType.IMAGE,
        url: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1400&q=80',
        width: 1400,
        height: 1800,
      },
      {
        type: MediaType.IMAGE,
        url: 'https://images.unsplash.com/photo-1574418440404-c89a9e67fc92?auto=format&fit=crop&w=1400&q=80',
        width: 1400,
        height: 1800,
      },
    ],
    likedBy: [
      'mihai.stefan@outlook.com',
      'diana.radu@gmail.com',
      'vlad.gheorghe@gmail.com',
      'laura.marinescu@yahoo.com',
    ],
    comments: [
      {
        authorEmail: 'vlad.gheorghe@gmail.com',
        content:
          'Aici chiar merge pentru o seara lejera. Important e sa mergi mai devreme pentru apus.',
      },
      {
        authorEmail: 'diana.radu@gmail.com',
        content:
          'Si eu as zice la fel. Arata bine, dar experienta e mai buna decat te-ai astepta.',
      },
    ],
    sharesCount: 6,
    viewsCount: 477,
    publishedAtOffsetDays: 10,
  },
  {
    title: 'Locul ala bun pentru o iesire cu prietenii fara prea mult zgomot',
    description:
      'Craft & Co. Brewery mi s-a parut alegerea buna pentru grupuri mici care vor sa stea la povesti fara muzica data exagerat tare. Selectia de bere e suficient de variata, iar spatiul te lasa sa stai fara senzatia ca trebuie sa pleci repede mai departe.',
    type: PostType.EXPERIENCE,
    tags: ['bere-artizanala', 'prieteni', 'iesire', 'seara'],
    locationName: 'Craft & Co. Brewery',
    media: [
      {
        type: MediaType.IMAGE,
        url: 'https://images.unsplash.com/photo-1436076863939-06870fe779c2?auto=format&fit=crop&w=1400&q=80',
        width: 1400,
        height: 1800,
      },
      {
        type: MediaType.IMAGE,
        url: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=1400&q=80',
        width: 1400,
        height: 1800,
      },
    ],
    likedBy: [
      'alex.ionescu@gmail.com',
      'mihai.stefan@outlook.com',
      'vlad.gheorghe@gmail.com',
      'sorin.travel@gmail.com',
    ],
    comments: [
      {
        authorEmail: 'alex.ionescu@gmail.com',
        content:
          'Buna recomandare. Exact asa l-am simtit si eu, merge foarte bine pentru grup mic.',
      },
      {
        authorEmail: 'mihai.stefan@outlook.com',
        content: 'Si selectia de bere e chiar ok, nu doar decorul.',
      },
    ],
    sharesCount: 5,
    viewsCount: 426,
    publishedAtOffsetDays: 12,
  },
  {
    title: 'Sushi bun cand chiar vrei o experienta mai atenta',
    description:
      'Sushi Zen intra clar in categoria locurilor la care mergi cand vrei o seara mai speciala si esti dispus sa platesti pentru asta. Nu este genul de restaurant pentru graba, dar tocmai asta il face sa merite daca vrei o experienta completa.',
    type: PostType.EXPERIENCE,
    tags: ['sushi', 'cina', 'experienta', 'premium'],
    locationName: 'Sushi Zen',
    media: [
      {
        type: MediaType.IMAGE,
        url: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=1400&q=80',
        width: 1400,
        height: 1800,
      },
      {
        type: MediaType.IMAGE,
        url: 'https://images.unsplash.com/photo-1563612116625-3012372fccce?auto=format&fit=crop&w=1400&q=80',
        width: 1400,
        height: 1800,
      },
    ],
    likedBy: [
      'diana.radu@gmail.com',
      'laura.marinescu@yahoo.com',
      'irina.weekend@gmail.com',
    ],
    comments: [
      {
        authorEmail: 'laura.marinescu@yahoo.com',
        content:
          'Aici chiar conteaza sa mergi fara graba. Merita pentru toata experienta, nu doar pentru mancare.',
      },
      {
        authorEmail: 'irina.weekend@gmail.com',
        content: 'Bun de pus la save pentru o ocazie speciala.',
      },
    ],
    sharesCount: 4,
    viewsCount: 344,
    publishedAtOffsetDays: 13,
  },
  {
    title: 'Tur rapid prin centru vechi intr-un minut',
    description:
      'Am pus aici un video scurt dintr-o plimbare de seara prin centru, ca sa vezi mai bine vibe-ul real din zona. E genul de traseu bun cand vrei sa simti orasul fara sa-ti faci un plan complicat dinainte.',
    type: PostType.TIP,
    tags: ['video', 'centrul-vechi', 'plimbare', 'oras'],
    locationName: 'The Rooftop Terrace',
    media: [
      {
        type: MediaType.VIDEO,
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        thumbnail:
          'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1400&q=80',
        width: 1080,
        height: 1920,
        duration: 15,
      },
    ],
    likedBy: [
      'alex.ionescu@gmail.com',
      'vlad.gheorghe@gmail.com',
      'sorin.travel@gmail.com',
      'irina.weekend@gmail.com',
    ],
    comments: [
      {
        authorEmail: 'vlad.gheorghe@gmail.com',
        content:
          'Foarte util formatul asta. Se vede rapid atmosfera fara sa cauti separat pe net.',
      },
      {
        authorEmail: 'sorin.travel@gmail.com',
        content:
          'Exact genul de clip scurt care ajuta cand vrei sa-ti faci o idee despre zona.',
      },
    ],
    sharesCount: 7,
    viewsCount: 931,
    publishedAtOffsetDays: 2,
  },
  {
    title: 'Cum arata seara la rooftop inainte sa se aglomereze',
    description:
      'Am vrut sa pun si un video care surprinde mai bine momentul bun de ajuns la rooftop: putin inainte de aglomeratie, cand inca poti sa te bucuri de vedere si de atmosfera. Daca alegi ora corecta, experienta e mult mai buna.',
    type: PostType.EXPERIENCE,
    tags: ['video', 'rooftop', 'apus', 'tips'],
    locationName: 'The Rooftop Terrace',
    media: [
      {
        type: MediaType.VIDEO,
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        thumbnail:
          'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80',
        width: 1080,
        height: 1920,
        duration: 20,
      },
      {
        type: MediaType.IMAGE,
        url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80',
        width: 1400,
        height: 1800,
      },
    ],
    likedBy: [
      'ana.popa@yahoo.com',
      'diana.radu@gmail.com',
      'laura.marinescu@yahoo.com',
      'irina.weekend@gmail.com',
    ],
    comments: [
      {
        authorEmail: 'ana.popa@yahoo.com',
        content:
          'Asta chiar ajuta sa-ti dai seama cand merita sa ajungi acolo.',
      },
      {
        authorEmail: 'diana.radu@gmail.com',
        content:
          'Mult mai bun un video aici decat doar poze. Se simte altfel locul.',
      },
      {
        authorEmail: 'laura.marinescu@yahoo.com',
        content:
          'Bun pont cu ora. Exact asta face diferenta la astfel de locuri.',
      },
    ],
    sharesCount: 9,
    viewsCount: 1102,
    publishedAtOffsetDays: 4,
  },
];

function subtractDays(days: number) {
  return new Date(Date.now() - days * 24 * 60 * 60 * 1000);
}

async function ensureUser() {
  const hashedPassword = await bcrypt.hash(DEFAULT_PASSWORD, 10);

  const existingTargetUser = await prisma.user.findUnique({
    where: { email: TARGET_EMAIL },
  });

  if (existingTargetUser) {
    return existingTargetUser;
  }

  const legacyUser = await prisma.user.findUnique({
    where: { email: LEGACY_EMAIL },
  });

  if (legacyUser) {
    return prisma.user.update({
      where: { id: legacyUser.id },
      data: {
        email: TARGET_EMAIL,
        nickname: 'happyander70',
        name: 'Happy Ander',
        bio: 'Recomandari bune de oras, locuri cozy si idei de weekend fara complicatii.',
      },
    });
  }

  return prisma.user.create({
    data: {
      email: TARGET_EMAIL,
      name: 'Happy Ander',
      nickname: 'happyander70',
      password: hashedPassword,
      role: UserRole.USER,
      bio: 'Recomandari bune de oras, locuri cozy si idei de weekend fara complicatii.',
      provider: 'local',
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80',
    },
  });
}

async function ensureSupportingUsers() {
  const hashedPassword = await bcrypt.hash(DEFAULT_PASSWORD, 10);

  for (const user of supportingUsers) {
    await prisma.user.upsert({
      where: { email: user.email },
      update: {
        name: user.name,
        nickname: user.nickname,
        bio: user.bio,
      },
      create: {
        email: user.email,
        name: user.name,
        nickname: user.nickname,
        password: hashedPassword,
        role: UserRole.USER,
        bio: user.bio,
        provider: 'local',
      },
    });
  }

  return prisma.user.findMany({
    where: {
      email: {
        in: supportingUsers.map((user) => user.email),
      },
    },
    select: {
      id: true,
      email: true,
    },
  });
}

async function cleanupLegacyMockPosts(userId: number) {
  await prisma.post.deleteMany({
    where: {
      authorId: userId,
      title: {
        in: [...LEGACY_MOCK_TITLES, ...mockPosts.map((post) => post.title)],
      },
    },
  });
}

async function resolveLocationId(locationName?: string) {
  if (!locationName) {
    return null;
  }

  const location = await prisma.location.findFirst({
    where: { name: locationName },
    select: { id: true },
  });

  return location?.id ?? null;
}

async function createPostWithInteractions(
  userId: number,
  userMap: Map<string, number>,
  definition: MockPostDefinition,
) {
  const locationId = await resolveLocationId(definition.locationName);
  const publishedAt = subtractDays(definition.publishedAtOffsetDays);

  const createdPost = await prisma.post.create({
    data: {
      authorId: userId,
      type: definition.type,
      title: definition.title,
      description: definition.description,
      tags: definition.tags,
      visibility: PostVisibility.PUBLIC,
      locationId,
      sharesCount: definition.sharesCount,
      viewsCount: definition.viewsCount,
      publishedAt,
      media: {
        create: definition.media.map((item, index) => ({
          type: item.type,
          url: item.url,
          thumbnail: item.thumbnail,
          order: index,
          width: item.width,
          height: item.height,
          duration: item.duration,
        })),
      },
      metrics: {
        create: {
          views: definition.viewsCount,
          impressions: Math.max(
            definition.viewsCount + 120,
            definition.viewsCount,
          ),
          clicks: Math.max(8, Math.round(definition.viewsCount * 0.08)),
          engagementRate: 0,
        },
      },
    },
  });

  const likeUserIds = definition.likedBy
    .map((email) => userMap.get(email))
    .filter((value): value is number => typeof value === 'number');

  if (likeUserIds.length > 0) {
    await prisma.postLike.createMany({
      data: likeUserIds.map((likedUserId) => ({
        userId: likedUserId,
        postId: createdPost.id,
      })),
      skipDuplicates: true,
    });
  }

  for (const comment of definition.comments) {
    const authorId = userMap.get(comment.authorEmail);
    if (!authorId) {
      continue;
    }

    await prisma.postComment.create({
      data: {
        postId: createdPost.id,
        authorId,
        content: comment.content,
      },
    });
  }

  const commentsCount = definition.comments.length;
  const likesCount = likeUserIds.length;
  const engagementRate =
    (likesCount + commentsCount + definition.sharesCount) /
    Math.max(definition.viewsCount, 1);

  await prisma.post.update({
    where: { id: createdPost.id },
    data: {
      likesCount,
      commentsCount,
      metrics: {
        update: {
          engagementRate,
        },
      },
    },
  });

  console.log(
    `✅ Created mock post: ${definition.title} (${likesCount} like-uri, ${commentsCount} comentarii)`,
  );
}

async function main() {
  console.log(`🌱 Seeding mock posts for ${TARGET_EMAIL}...`);

  const user = await ensureUser();
  const supportUsers = await ensureSupportingUsers();
  const userMap = new Map(supportUsers.map((item) => [item.email, item.id]));

  await cleanupLegacyMockPosts(user.id);

  for (const post of mockPosts) {
    await createPostWithInteractions(user.id, userMap, post);
  }

  console.log('🎉 Mock posts ready.');
}

main()
  .catch((error) => {
    console.error('❌ Error seeding mock posts:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
