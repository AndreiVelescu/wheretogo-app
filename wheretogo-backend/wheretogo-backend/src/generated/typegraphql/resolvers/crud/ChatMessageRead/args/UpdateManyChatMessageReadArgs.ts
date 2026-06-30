import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChatMessageReadUpdateManyMutationInput } from "../../../inputs/ChatMessageReadUpdateManyMutationInput";
import { ChatMessageReadWhereInput } from "../../../inputs/ChatMessageReadWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyChatMessageReadArgs {
  @TypeGraphQL.Field(_type => ChatMessageReadUpdateManyMutationInput, {
    nullable: false
  })
  data!: ChatMessageReadUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ChatMessageReadWhereInput, {
    nullable: true
  })
  where?: ChatMessageReadWhereInput | undefined;
}
