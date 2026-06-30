import { Field, InputType, Int, ObjectType, Float } from 'type-graphql';
import { User, Location, Trip } from '../../generated/typegraphql';

@ObjectType()
export class AuthResponse {
  @Field(() => String)
  access_token!: string;

  @Field(() => String)
  refresh_token!: string;

  @Field(() => User)
  user!: User;
}

@ObjectType()
export class RefreshTokenResponse {
  @Field(() => String)
  access_token!: string;

  @Field(() => String)
  refresh_token!: string;
}

@ObjectType()
export class MessageResponse {
  @Field()
  message!: string;
}

@InputType()
export class CreateUserInput {
  @Field()
  name!: string;

  @Field({ nullable: true })
  nickname?: string;

  @Field()
  email!: string;

  @Field()
  password!: string;

  @Field({ nullable: true })
  role?: string;
}

@InputType()
export class LoginUserInput {
  @Field()
  email!: string;

  @Field()
  password!: string;
}

@InputType()
export class UpdateUserInput {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  password?: string;

  @Field({ nullable: true })
  role?: string;

  @Field({ nullable: true })
  nickname?: string;
}

@InputType()
export class AddFavoriteInput {
  @Field(() => Int)
  locationId!: number;
}

@InputType()
export class CreateLocationInput {
  @Field()
  name!: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  type!: string;

  @Field({ nullable: true })
  priceRange?: string;

  @Field(() => [String])
  vibes!: string[];

  @Field({ nullable: true })
  address?: string;

  @Field({ nullable: true })
  openHours?: string;

  @Field(() => [String], { nullable: true })
  photos?: string[];

  @Field({ nullable: true })
  menuPdf?: string;
}

@InputType()
export class UpdateLocationInput {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  type?: string;

  @Field({ nullable: true })
  priceRange?: string;

  @Field(() => [String], { nullable: true })
  vibes?: string[];

  @Field({ nullable: true })
  address?: string;

  @Field({ nullable: true })
  openHours?: string;

  @Field(() => [String], { nullable: true })
  photos?: string[];

  @Field({ nullable: true })
  menuPdf?: string;
}

@InputType()
export class LocationFilterInput {
  @Field({ nullable: true })
  type?: string;

  @Field({ nullable: true })
  priceRange?: string;

  @Field(() => [String], { nullable: true })
  vibes?: string[];

  @Field({ nullable: true })
  search?: string;

  @Field({ nullable: true })
  sortBy?: string;
}

@InputType()
export class TripStopInput {
  @Field(() => Int, { nullable: true })
  locationId?: number;

  @Field({ nullable: true })
  customName?: string;

  @Field({ nullable: true })
  address?: string;

  @Field(() => Float, { nullable: true })
  lat?: number;

  @Field(() => Float, { nullable: true })
  lng?: number;

  @Field(() => Int)
  order!: number;

  @Field({ nullable: true })
  arrivalTime?: string;

  @Field({ nullable: true })
  departureTime?: string;

  @Field({ nullable: true })
  transportMode?: string;

  @Field({ nullable: true })
  notes?: string;

  @Field(() => Float, { nullable: true })
  estimatedCost?: number;
}

@InputType()
export class TripDayInput {
  @Field(() => Int)
  dayNumber!: number;

  @Field()
  date!: string;

  @Field({ nullable: true })
  notes?: string;

  @Field(() => [TripStopInput], { nullable: true })
  stops?: TripStopInput[];
}

@InputType()
export class CreateTripInput {
  @Field()
  title!: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  startDate!: string;

  @Field()
  endDate!: string;

  @Field({ nullable: true })
  city?: string;

  @Field({ nullable: true })
  country?: string;

  @Field({ nullable: true })
  isPublic?: boolean;

  @Field(() => Float, { nullable: true })
  totalBudget?: number;

  @Field({ nullable: true })
  currency?: string;

  @Field(() => [TripDayInput], { nullable: true })
  days?: TripDayInput[];
}

@InputType()
export class GenerateTripInput {
  @Field({ nullable: true })
  title?: string;

  @Field()
  city!: string;

  @Field()
  startDate!: string;

  @Field(() => Int)
  daysCount!: number;

  @Field(() => [String], { nullable: true })
  types?: string[];

  @Field(() => [String], { nullable: true })
  vibes?: string[];

  @Field(() => [String], { nullable: true })
  priceRanges?: string[];

  @Field(() => Float, { nullable: true })
  minRating?: number;

  @Field(() => Int, { nullable: true })
  maxStopsPerDay?: number;

  @Field(() => Float, { nullable: true })
  totalBudget?: number;

  @Field({ nullable: true })
  currency?: string;
}

@InputType()
export class UpdateTripInput {
  @Field(() => Int)
  id!: number;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  startDate?: string;

  @Field({ nullable: true })
  endDate?: string;

  @Field({ nullable: true })
  city?: string;

  @Field({ nullable: true })
  country?: string;

  @Field({ nullable: true })
  isPublic?: boolean;

  @Field(() => Float, { nullable: true })
  totalBudget?: number;

  @Field({ nullable: true })
  currency?: string;
}

// ─────────────────────────────────────────────────────────────
// NOTIFICATION TYPES
// ─────────────────────────────────────────────────────────────

@ObjectType()
export class NotificationLocationRef {
  @Field(() => Int)
  id!: number;

  @Field()
  name!: string;
}

@ObjectType()
export class NotificationTripRef {
  @Field(() => Int)
  id!: number;

  @Field()
  title!: string;
}

@ObjectType()
export class NotificationEventRef {
  @Field(() => Int)
  id!: number;

  @Field()
  name!: string;
}

@ObjectType()
export class NotificationResponse {
  @Field(() => Int)
  id!: number;

  @Field(() => Int)
  userId!: number;

  @Field()
  type!: string;

  @Field()
  title!: string;

  @Field()
  body!: string;

  @Field()
  isRead!: boolean;

  @Field(() => NotificationLocationRef, { nullable: true })
  location?: NotificationLocationRef;

  @Field(() => NotificationTripRef, { nullable: true })
  trip?: NotificationTripRef;

  @Field(() => NotificationEventRef, { nullable: true })
  event?: NotificationEventRef;

  @Field()
  createdAt!: Date;
}

// ==================== CHAT TYPES ====================

export { User, Location, Trip };
