import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessageWhereInput } from "../inputs/ChatMessageWhereInput";

@TypeGraphQL.InputType("ChatMessageNullableRelationFilter", {})
export class ChatMessageNullableRelationFilter {
  @TypeGraphQL.Field(_type => ChatMessageWhereInput, {
    nullable: true
  })
  is?: ChatMessageWhereInput | undefined;

  @TypeGraphQL.Field(_type => ChatMessageWhereInput, {
    nullable: true
  })
  isNot?: ChatMessageWhereInput | undefined;
}
