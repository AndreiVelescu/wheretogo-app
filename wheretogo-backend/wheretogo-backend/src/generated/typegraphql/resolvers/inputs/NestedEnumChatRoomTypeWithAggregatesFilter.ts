import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumChatRoomTypeFilter } from "../inputs/NestedEnumChatRoomTypeFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { ChatRoomType } from "../../enums/ChatRoomType";

@TypeGraphQL.InputType("NestedEnumChatRoomTypeWithAggregatesFilter", {})
export class NestedEnumChatRoomTypeWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumChatRoomTypeWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumChatRoomTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumChatRoomTypeFilter, {
    nullable: true
  })
  _min?: NestedEnumChatRoomTypeFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumChatRoomTypeFilter, {
    nullable: true
  })
  _max?: NestedEnumChatRoomTypeFilter | undefined;
}
