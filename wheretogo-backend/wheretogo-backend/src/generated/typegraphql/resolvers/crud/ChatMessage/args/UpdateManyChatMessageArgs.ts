import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChatMessageUpdateManyMutationInput } from "../../../inputs/ChatMessageUpdateManyMutationInput";
import { ChatMessageWhereInput } from "../../../inputs/ChatMessageWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyChatMessageArgs {
  @TypeGraphQL.Field(_type => ChatMessageUpdateManyMutationInput, {
    nullable: false
  })
  data!: ChatMessageUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ChatMessageWhereInput, {
    nullable: true
  })
  where?: ChatMessageWhereInput | undefined;
}
