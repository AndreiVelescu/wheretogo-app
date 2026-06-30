import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatRoomType } from "../../enums/ChatRoomType";

@TypeGraphQL.InputType("EnumChatRoomTypeFieldUpdateOperationsInput", {})
export class EnumChatRoomTypeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => ChatRoomType, {
    nullable: true
  })
  set?: "TRIP" | "DIRECT" | "GROUP" | undefined;
}
