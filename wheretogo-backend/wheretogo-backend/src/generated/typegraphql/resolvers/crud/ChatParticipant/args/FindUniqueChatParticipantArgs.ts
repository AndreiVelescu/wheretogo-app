import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChatParticipantWhereUniqueInput } from "../../../inputs/ChatParticipantWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueChatParticipantArgs {
  @TypeGraphQL.Field(_type => ChatParticipantWhereUniqueInput, {
    nullable: false
  })
  where!: ChatParticipantWhereUniqueInput;
}
