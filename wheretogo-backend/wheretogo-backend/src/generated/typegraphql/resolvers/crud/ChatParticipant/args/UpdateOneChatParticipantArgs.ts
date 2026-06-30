import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChatParticipantUpdateInput } from "../../../inputs/ChatParticipantUpdateInput";
import { ChatParticipantWhereUniqueInput } from "../../../inputs/ChatParticipantWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneChatParticipantArgs {
  @TypeGraphQL.Field(_type => ChatParticipantUpdateInput, {
    nullable: false
  })
  data!: ChatParticipantUpdateInput;

  @TypeGraphQL.Field(_type => ChatParticipantWhereUniqueInput, {
    nullable: false
  })
  where!: ChatParticipantWhereUniqueInput;
}
