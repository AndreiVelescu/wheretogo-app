import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChatMessageReadWhereInput } from "../../inputs/ChatMessageReadWhereInput";

@TypeGraphQL.ArgsType()
export class ChatMessageCountReadByArgs {
  @TypeGraphQL.Field(_type => ChatMessageReadWhereInput, {
    nullable: true
  })
  where?: ChatMessageReadWhereInput | undefined;
}
