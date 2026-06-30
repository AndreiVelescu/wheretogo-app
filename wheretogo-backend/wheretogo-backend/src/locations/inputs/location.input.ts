import { InputType, Field } from '@nestjs/graphql';
import {
  IsString,
  IsArray,
  IsOptional,
  IsUrl,
  MinLength,
} from 'class-validator';

@InputType()
export class CreateLocationInput {
  @Field()
  @IsString()
  @MinLength(2)
  name: string;

  @Field()
  @IsString()
  @MinLength(10)
  description: string;

  @Field()
  @IsString()
  type: string;

  @Field()
  @IsString()
  priceRange: string;

  @Field(() => [String])
  @IsArray()
  @IsString({ each: true })
  vibes: string[];

  @Field()
  @IsString()
  address: string;

  @Field()
  @IsString()
  openHours: string;

  @Field(() => [String], { nullable: true })
  @IsOptional()
  @IsArray()
  @IsUrl({}, { each: true })
  photos?: string[];

  @Field({ nullable: true })
  @IsOptional()
  @IsUrl()
  menuPdf?: string;
}

@InputType()
export class UpdateLocationInput {
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  @MinLength(2)
  name?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  @MinLength(10)
  description?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  type?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  priceRange?: string;

  @Field(() => [String], { nullable: true })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  vibes?: string[];

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  address?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  openHours?: string;

  @Field(() => [String], { nullable: true })
  @IsOptional()
  @IsArray()
  @IsUrl({}, { each: true })
  photos?: string[];

  @Field({ nullable: true })
  @IsOptional()
  @IsUrl()
  menuPdf?: string;
}

@InputType()
export class LocationFilterInput {
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  type?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  priceRange?: string;

  @Field(() => [String], { nullable: true })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  vibes?: string[];

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  search?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  sortBy?: string;
}
