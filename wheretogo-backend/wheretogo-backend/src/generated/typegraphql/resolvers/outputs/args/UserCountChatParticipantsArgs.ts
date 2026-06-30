import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChatParticipantWhereInput } from "../../inputs/ChatParticipantWhereInput";

@TypeGraphQL.ArgsType()
export class UserCountChatParticipantsArgs {
  @TypeGraphQL.Field(_type => ChatParticipantWhereInput, {
    nullable: true
  })
  where?: ChatParticipantWhereInput | undefined;
}
