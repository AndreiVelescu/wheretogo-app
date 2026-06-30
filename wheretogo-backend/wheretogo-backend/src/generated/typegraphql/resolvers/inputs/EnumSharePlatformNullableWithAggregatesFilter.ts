import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumSharePlatformNullableFilter } from "../inputs/NestedEnumSharePlatformNullableFilter";
import { NestedEnumSharePlatformNullableWithAggregatesFilter } from "../inputs/NestedEnumSharePlatformNullableWithAggregatesFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
import { SharePlatform } from "../../enums/SharePlatform";

@TypeGraphQL.InputType("EnumSharePlatformNullableWithAggregatesFilter", {})
export class EnumSharePlatformNullableWithAggregatesFilter {
  @TypeGraphQL.Field(_type => SharePlatform, {
    nullable: true
  })
  equals?: "INTERNAL" | "FACEBOOK" | "INSTAGRAM" | "TWITTER" | "WHATSAPP" | "LINK" | undefined;

  @TypeGraphQL.Field(_type => [SharePlatform], {
    nullable: true
  })
  in?: Array<"INTERNAL" | "FACEBOOK" | "INSTAGRAM" | "TWITTER" | "WHATSAPP" | "LINK"> | undefined;

  @TypeGraphQL.Field(_type => [SharePlatform], {
    nullable: true
  })
  notIn?: Array<"INTERNAL" | "FACEBOOK" | "INSTAGRAM" | "TWITTER" | "WHATSAPP" | "LINK"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumSharePlatformNullableWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumSharePlatformNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntNullableFilter, {
    nullable: true
  })
  _count?: NestedIntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumSharePlatformNullableFilter, {
    nullable: true
  })
  _min?: NestedEnumSharePlatformNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumSharePlatformNullableFilter, {
    nullable: true
  })
  _max?: NestedEnumSharePlatformNullableFilter | undefined;
}
