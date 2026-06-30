import { ObjectType, Field, Int } from 'type-graphql';

@ObjectType()
export class TypingIndicator {
  @Field(() => Int)
  userId!: number;

  @Field(() => Int)
  roomId!: number;

  @Field(() => Boolean)
  isTyping!: boolean;
}
