import { ObjectType, Field, Int } from 'type-graphql';
import { ChatMessage } from '../../generated/typegraphql/models/ChatMessage';

@ObjectType()
export class MessageCreatedPayload {
  @Field(() => Int)
  roomId: number;

  @Field(() => ChatMessage)
  message: ChatMessage;

  @Field(() => [Int])
  participantIds: number[];
}
