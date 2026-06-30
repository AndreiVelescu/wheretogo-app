import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChatMessageReadUpdateInput } from "../../../inputs/ChatMessageReadUpdateInput";
import { ChatMessageReadWhereUniqueInput } from "../../../inputs/ChatMessageReadWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneChatMessageReadArgs {
  @TypeGraphQL.Field(_type => ChatMessageReadUpdateInput, {
    nullable: false
  })
  data!: ChatMessageReadUpdateInput;

  @TypeGraphQL.Field(_type => ChatMessageReadWhereUniqueInput, {
    nullable: false
  })
  where!: ChatMessageReadWhereUniqueInput;
}
