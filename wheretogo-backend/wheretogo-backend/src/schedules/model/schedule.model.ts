import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Schedule {
  @Field(() => Number)
  id: number;

  @Field(() => Number)
  userId: number;

  @Field(() => Number)
  locationId: number;

  @Field()
  scheduledDate: Date;

  @Field()
  createdAt: Date;
}
