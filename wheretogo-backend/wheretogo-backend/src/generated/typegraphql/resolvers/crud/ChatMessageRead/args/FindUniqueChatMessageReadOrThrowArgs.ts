import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChatMessageReadWhereUniqueInput } from "../../../inputs/ChatMessageReadWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueChatMessageReadOrThrowArgs {
  @TypeGraphQL.Field(_type => ChatMessageReadWhereUniqueInput, {
    nullable: false
  })
  where!: ChatMessageReadWhereUniqueInput;
}
