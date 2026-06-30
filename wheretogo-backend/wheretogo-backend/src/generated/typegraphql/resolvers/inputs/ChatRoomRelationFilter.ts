import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatRoomWhereInput } from "../inputs/ChatRoomWhereInput";

@TypeGraphQL.InputType("ChatRoomRelationFilter", {})
export class ChatRoomRelationFilter {
  @TypeGraphQL.Field(_type => ChatRoomWhereInput, {
    nullable: true
  })
  is?: ChatRoomWhereInput | undefined;

  @TypeGraphQL.Field(_type => ChatRoomWhereInput, {
    nullable: true
  })
  isNot?: ChatRoomWhereInput | undefined;
}
