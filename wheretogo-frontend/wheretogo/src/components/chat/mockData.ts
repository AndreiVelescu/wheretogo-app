import { TripGroup, User } from "./types";

// Mock data - în implementarea reală, acestea vor veni din API
export const mockUsers: User[] = [
  {
    id: "1",
    name: "Ana Popescu",
    isOnline: true,
  },
  {
    id: "2",
    name: "Mihai Ionescu",
    isOnline: false,
    lastSeen: new Date(Date.now() - 3600000), // 1 oră în urmă
  },
  {
    id: "3",
    name: "Elena Dumitrescu",
    isOnline: true,
  },
  {
    id: "4",
    name: "Alexandru Radu",
    isOnline: false,
    lastSeen: new Date(Date.now() - 7200000), // 2 ore în urmă
  },
];

export const mockTripGroups: TripGroup[] = [
  {
    id: "1",
    name: "Paris Adventure",
    destination: "Paris, Franța",
    members: [mockUsers[0], mockUsers[1]],
    lastMessage: "Ana: Ce facem mâine la Turnul Eiffel?",
    lastMessageTime: new Date(Date.now() - 300000), // 5 min în urmă
  },
  {
    id: "2",
    name: "Bali Squad",
    destination: "Bali, Indonezia",
    members: [mockUsers[2]],
    lastMessage: "Elena: Am găsit un restaurant super!",
    lastMessageTime: new Date(Date.now() - 1800000), // 30 min în urmă
  },
  {
    id: "3",
    name: "Tokyo Explorers",
    destination: "Tokyo, Japonia",
    members: [mockUsers[0], mockUsers[2], mockUsers[3]],
    lastMessage: "Alexandru: Când ajungem la hotel?",
    lastMessageTime: new Date(Date.now() - 3600000), // 1 oră în urmă
  },
];
