import { InputType, Field, Int, Float } from '@nestjs/graphql';
import {
  IsString,
  IsOptional,
  IsInt,
  Min,
  IsArray,
  ValidateNested,
  IsDateString,
  IsBoolean,
  IsNumber,
} from 'class-validator';
import { Type } from 'class-transformer';

@InputType()
export class TripStopInput {
  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  locationId?: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  customName?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  address?: string;

  @Field(() => Float, { nullable: true })
  @IsOptional()
  @IsNumber()
  lat?: number;

  @Field(() => Float, { nullable: true })
  @IsOptional()
  @IsNumber()
  lng?: number;

  @Field(() => Int)
  @IsInt()
  @Min(1)
  order: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  arrivalTime?: string; // HH:mm

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  departureTime?: string; // HH:mm

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  transportMode?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  notes?: string;

  @Field(() => Float, { nullable: true })
  @IsOptional()
  @IsNumber()
  estimatedCost?: number;
}

@InputType()
export class TripDayInput {
  @Field(() => Int)
  @IsInt()
  @Min(1)
  dayNumber: number;

  @Field()
  @IsDateString()
  date: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  notes?: string;

  @Field(() => [TripStopInput], { nullable: true })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TripStopInput)
  stops?: TripStopInput[];
}

@InputType()
export class CreateTripInput {
  @Field()
  @IsString()
  title: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  description?: string;

  @Field()
  @IsDateString()
  startDate: string;

  @Field()
  @IsDateString()
  endDate: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  city?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  country?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsBoolean()
  isPublic?: boolean;

  @Field(() => Float, { nullable: true })
  @IsOptional()
  @IsNumber()
  totalBudget?: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  currency?: string;

  @Field(() => [TripDayInput], { nullable: true })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TripDayInput)
  days?: TripDayInput[];
}

@InputType()
export class GenerateTripInput {
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  title?: string;

  @Field()
  @IsString()
  city: string;

  @Field()
  @IsDateString()
  startDate: string;

  @Field(() => Int)
  @IsInt()
  @Min(1)
  daysCount: number;

  @Field(() => [String], { nullable: true })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  types?: string[];

  @Field(() => [String], { nullable: true })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  vibes?: string[];

  @Field(() => [String], { nullable: true })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  priceRanges?: string[];

  @Field(() => Float, { nullable: true })
  @IsOptional()
  @IsNumber()
  minRating?: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  @Min(1)
  maxStopsPerDay?: number;

  @Field(() => Float, { nullable: true })
  @IsOptional()
  @IsNumber()
  totalBudget?: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  currency?: string;
}
