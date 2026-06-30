export interface TripPreferences {
  title?: string;
  destination: string;
  startDate: string;
  endDate: string;
  budget: "low" | "medium" | "high";
  interests: string[];
  types: string[];
  vibes: string[];
  priceRanges: string[];
  minRating: number | null;
  maxStopsPerDay: number;
  groupSize: number;
  accommodationType: "hotel" | "hostel" | "apartment" | "any";
  transportPreference: "walking" | "public" | "car" | "mixed";
}

export type WizardStep = 1 | 2 | 3 | 4;

export type OptionItem = {
  id: string;
  label: string;
  icon?: string; // Ionicons name
};

export type DestinationItem = {
  id: string;
  label: string;
  country: string;
  flag: string;
  description: string;
};
