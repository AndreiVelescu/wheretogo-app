import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumSharePlatformNullableFilter } from "../inputs/NestedEnumSharePlatformNullableFilter";
import { SharePlatform } from "../../enums/SharePlatform";

@TypeGraphQL.InputType("EnumSharePlatformNullableFilter", {})
export class EnumSharePlatformNullableFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumSharePlatformNullableFilter, {
    nullable: true
  })
  not?: NestedEnumSharePlatformNullableFilter | undefined;
}
