import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChatMessageWhereInput } from "../../../inputs/ChatMessageWhereInput";

@TypeGraphQL.ArgsType()
export class ChatMessageReplyToArgs {
  @TypeGraphQL.Field(_type => ChatMessageWhereInput, {
    nullable: true
  })
  where?: ChatMessageWhereInput | undefined;
}
