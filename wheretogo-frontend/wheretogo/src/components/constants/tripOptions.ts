import type { DestinationItem, OptionItem } from "@/src/features/trip/types";

export const INTEREST_OPTIONS: OptionItem[] = [
  { id: "culture", label: "Cultură", icon: "library-outline" },
  { id: "food", label: "Gastronomie", icon: "restaurant-outline" },
  { id: "nature", label: "Natură", icon: "leaf-outline" },
  { id: "nightlife", label: "Seară & ieșiri", icon: "moon-outline" },
  { id: "relaxation", label: "Relaxare", icon: "flower-outline" },
  { id: "work", label: "Work-friendly", icon: "laptop-outline" },
  { id: "date", label: "Date spots", icon: "heart-outline" },
  { id: "social", label: "Social", icon: "people-outline" },
];

export const TYPE_OPTIONS: OptionItem[] = [
  { id: "restaurant", label: "Restaurante", icon: "restaurant-outline" },
  { id: "cafe", label: "Cafenele", icon: "cafe-outline" },
  { id: "bar", label: "Baruri", icon: "wine-outline" },
  { id: "park", label: "Parcuri", icon: "leaf-outline" },
  {
    id: "tourist_attraction",
    label: "Obiective",
    icon: "pin-outline",
  },
];

export const VIBE_OPTIONS: OptionItem[] = [
  { id: "romantic", label: "Romantic", icon: "heart-outline" },
  { id: "chill", label: "Chill", icon: "cafe-outline" },
  { id: "foodie", label: "Foodie", icon: "restaurant-outline" },
  { id: "work", label: "Work", icon: "laptop-outline" },
  { id: "date", label: "Date", icon: "sparkles-outline" },
  { id: "casual", label: "Casual", icon: "partly-sunny-outline" },
  { id: "social", label: "Social", icon: "people-outline" },
  { id: "night", label: "Night", icon: "moon-outline" },
  { id: "culture", label: "Culture", icon: "library-outline" },
  { id: "nature", label: "Nature", icon: "leaf-outline" },
];

export const DESTINATION_OPTIONS: DestinationItem[] = [
  {
    id: "chisinau",
    label: "Chișinău",
    country: "Moldova",
    flag: "🇲🇩",
    description: "Capital vibrantă și centrul cultural",
  },
];
