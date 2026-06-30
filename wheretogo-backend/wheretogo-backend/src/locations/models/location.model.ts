import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class Location {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  type: string;

  @Field()
  priceRange: string;

  @Field(() => [String])
  vibes: string[];

  @Field()
  address: string;

  @Field()
  openHours: string;

  @Field(() => [String])
  photos: string[];

  @Field({ nullable: true })
  menuPdf?: string;

  @Field()
  createdAt: Date;

  @Field(() => Float, { nullable: true })
  averageRating?: number;

  @Field(() => Int, { nullable: true })
  reviewCount?: number;

  @Field(() => Boolean, { nullable: true })
  isHype?: boolean;

  @Field(() => Boolean, { nullable: true })
  isFavorite?: boolean;
}
