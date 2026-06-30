import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumPlatformFilter } from "../inputs/NestedEnumPlatformFilter";
import { NestedEnumPlatformWithAggregatesFilter } from "../inputs/NestedEnumPlatformWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { Platform } from "../../enums/Platform";

@TypeGraphQL.InputType("EnumPlatformWithAggregatesFilter", {})
export class EnumPlatformWithAggregatesFilter {
  @TypeGraphQL.Field(_type => Platform, {
    nullable: true
  })
  equals?: "IOS" | "ANDROID" | "WEB" | undefined;

  @TypeGraphQL.Field(_type => [Platform], {
    nullable: true
  })
  in?: Array<"IOS" | "ANDROID" | "WEB"> | undefined;

  @TypeGraphQL.Field(_type => [Platform], {
    nullable: true
  })
  notIn?: Array<"IOS" | "ANDROID" | "WEB"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumPlatformWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumPlatformWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumPlatformFilter, {
    nullable: true
  })
  _min?: NestedEnumPlatformFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumPlatformFilter, {
    nullable: true
  })
  _max?: NestedEnumPlatformFilter | undefined;
}
