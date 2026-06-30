import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessageReadWhereInput } from "../inputs/ChatMessageReadWhereInput";

@TypeGraphQL.InputType("ChatMessageReadListRelationFilter", {})
export class ChatMessageReadListRelationFilter {
  @TypeGraphQL.Field(_type => ChatMessageReadWhereInput, {
    nullable: true
  })
  every?: ChatMessageReadWhereInput | undefined;

  @TypeGraphQL.Field(_type => ChatMessageReadWhereInput, {
    nullable: true
  })
  some?: ChatMessageReadWhereInput | undefined;

  @TypeGraphQL.Field(_type => ChatMessageReadWhereInput, {
    nullable: true
  })
  none?: ChatMessageReadWhereInput | undefined;
}
