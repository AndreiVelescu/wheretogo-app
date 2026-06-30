import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChatParticipantCreateInput } from "../../../inputs/ChatParticipantCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneChatParticipantArgs {
  @TypeGraphQL.Field(_type => ChatParticipantCreateInput, {
    nullable: false
  })
  data!: ChatParticipantCreateInput;
}
