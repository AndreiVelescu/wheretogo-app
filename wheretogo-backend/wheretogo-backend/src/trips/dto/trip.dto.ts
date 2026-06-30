export interface TripStopDto {
  locationId?: number;
  customName?: string;
  address?: string;
  lat?: number;
  lng?: number;
  order: number;
  arrivalTime?: string;
  departureTime?: string;
  transportMode?: string;
  notes?: string;
  estimatedCost?: number;
}

export interface TripDayDto {
  dayNumber: number;
  date: Date;
  notes?: string;
  stops?: TripStopDto[];
}

export interface CreateTripDto {
  title: string;
  description?: string;
  startDate: Date;
  endDate: Date;
  city?: string;
  country?: string;
  isPublic?: boolean;
  totalBudget?: number;
  currency?: string;
  days?: TripDayDto[];
}

export interface GenerateTripDto {
  title?: string;
  city: string;
  startDate: Date;
  daysCount: number;
  types?: string[];
  vibes?: string[];
  priceRanges?: string[];
  minRating?: number;
  maxStopsPerDay?: number;
  totalBudget?: number;
  currency?: string;
}
