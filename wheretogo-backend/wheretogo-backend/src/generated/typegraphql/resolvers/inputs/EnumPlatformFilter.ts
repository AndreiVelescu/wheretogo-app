import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumPlatformFilter } from "../inputs/NestedEnumPlatformFilter";
import { Platform } from "../../enums/Platform";

@TypeGraphQL.InputType("EnumPlatformFilter", {})
export class EnumPlatformFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumPlatformFilter, {
    nullable: true
  })
  not?: NestedEnumPlatformFilter | undefined;
}
