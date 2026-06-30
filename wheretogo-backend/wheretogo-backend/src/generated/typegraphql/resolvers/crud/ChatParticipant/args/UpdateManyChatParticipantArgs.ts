import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChatParticipantUpdateManyMutationInput } from "../../../inputs/ChatParticipantUpdateManyMutationInput";
import { ChatParticipantWhereInput } from "../../../inputs/ChatParticipantWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyChatParticipantArgs {
  @TypeGraphQL.Field(_type => ChatParticipantUpdateManyMutationInput, {
    nullable: false
  })
  data!: ChatParticipantUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ChatParticipantWhereInput, {
    nullable: true
  })
  where?: ChatParticipantWhereInput | undefined;
}
