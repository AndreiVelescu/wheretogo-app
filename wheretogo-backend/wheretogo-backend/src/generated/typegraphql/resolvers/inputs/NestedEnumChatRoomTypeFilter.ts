import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatRoomType } from "../../enums/ChatRoomType";

@TypeGraphQL.InputType("NestedEnumChatRoomTypeFilter", {})
export class NestedEnumChatRoomTypeFilter {
  @TypeGraphQL.Field(_type => ChatRoomType, {
    nullable: true
  })
  equals?: "TRIP" | "DIRECT" | "GROUP" | undefined;

  @TypeGraphQL.Field(_type => [ChatRoomType], {
    nullable: true
  })
  in?: Array<"TRIP" | "DIRECT" | "GROUP"> | undefined;

  @TypeGraphQL.Field(_type => [ChatRoomType], {
    nullable: true
  })
  notIn?: Array<"TRIP" | "DIRECT" | "GROUP"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumChatRoomTypeFilter, {
    nullable: true
  })
  not?: NestedEnumChatRoomTypeFilter | undefined;
}
