import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class Trip {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  ownerId: number;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string | null;

  @Field()
  status: string;

  @Field()
  startDate: Date;

  @Field()
  endDate: Date;

  @Field({ nullable: true })
  city?: string | null;

  @Field({ nullable: true })
  country?: string | null;

  @Field()
  isPublic: boolean;

  @Field(() => Float, { nullable: true })
  totalBudget?: number | null;

  @Field({ nullable: true })
  currency?: string | null;

  @Field(() => [TripDay], { nullable: true })
  days?: TripDay[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

@ObjectType()
export class TripDay {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  tripId: number;

  @Field()
  date: Date;

  @Field(() => Int)
  dayNumber: number;

  @Field({ nullable: true })
  notes?: string | null;

  @Field(() => [TripStop], { nullable: true })
  stops?: TripStop[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

@ObjectType()
export class TripStop {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  tripDayId: number;

  @Field(() => Int, { nullable: true })
  locationId?: number;

  @Field({ nullable: true })
  customName?: string | null;

  @Field({ nullable: true })
  address?: string | null;

  @Field(() => Float, { nullable: true })
  lat?: number | null;

  @Field(() => Float, { nullable: true })
  lng?: number | null;

  @Field(() => Int)
  order: number;

  @Field({ nullable: true })
  arrivalTime?: string | null;

  @Field({ nullable: true })
  departureTime?: string | null;

  @Field({ nullable: true })
  transportMode?: string | null;

  @Field({ nullable: true })
  notes?: string | null;

  @Field(() => Float, { nullable: true })
  estimatedCost?: number | null;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
