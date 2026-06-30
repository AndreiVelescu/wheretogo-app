import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumMessageTypeFilter } from "../inputs/NestedEnumMessageTypeFilter";
import { NestedEnumMessageTypeWithAggregatesFilter } from "../inputs/NestedEnumMessageTypeWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { MessageType } from "../../enums/MessageType";

@TypeGraphQL.InputType("EnumMessageTypeWithAggregatesFilter", {})
export class EnumMessageTypeWithAggregatesFilter {
  @TypeGraphQL.Field(_type => MessageType, {
    nullable: true
  })
  equals?: "TEXT" | "IMAGE" | "LOCATION" | "FILE" | "SYSTEM" | undefined;

  @TypeGraphQL.Field(_type => [MessageType], {
    nullable: true
  })
  in?: Array<"TEXT" | "IMAGE" | "LOCATION" | "FILE" | "SYSTEM"> | undefined;

  @TypeGraphQL.Field(_type => [MessageType], {
    nullable: true
  })
  notIn?: Array<"TEXT" | "IMAGE" | "LOCATION" | "FILE" | "SYSTEM"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumMessageTypeWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumMessageTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumMessageTypeFilter, {
    nullable: true
  })
  _min?: NestedEnumMessageTypeFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumMessageTypeFilter, {
    nullable: true
  })
  _max?: NestedEnumMessageTypeFilter | undefined;
}
