import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessageWhereInput } from "../inputs/ChatMessageWhereInput";

@TypeGraphQL.InputType("ChatMessageListRelationFilter", {})
export class ChatMessageListRelationFilter {
  @TypeGraphQL.Field(_type => ChatMessageWhereInput, {
    nullable: true
  })
  every?: ChatMessageWhereInput | undefined;

  @TypeGraphQL.Field(_type => ChatMessageWhereInput, {
    nullable: true
  })
  some?: ChatMessageWhereInput | undefined;

  @TypeGraphQL.Field(_type => ChatMessageWhereInput, {
    nullable: true
  })
  none?: ChatMessageWhereInput | undefined;
}
