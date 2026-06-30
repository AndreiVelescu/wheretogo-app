import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChatParticipantCreateInput } from "../../../inputs/ChatParticipantCreateInput";
import { ChatParticipantUpdateInput } from "../../../inputs/ChatParticipantUpdateInput";
import { ChatParticipantWhereUniqueInput } from "../../../inputs/ChatParticipantWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneChatParticipantArgs {
  @TypeGraphQL.Field(_type => ChatParticipantWhereUniqueInput, {
    nullable: false
  })
  where!: ChatParticipantWhereUniqueInput;

  @TypeGraphQL.Field(_type => ChatParticipantCreateInput, {
    nullable: false
  })
  create!: ChatParticipantCreateInput;

  @TypeGraphQL.Field(_type => ChatParticipantUpdateInput, {
    nullable: false
  })
  update!: ChatParticipantUpdateInput;
}
