import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Platform } from "../../enums/Platform";

@TypeGraphQL.InputType("EnumPlatformFieldUpdateOperationsInput", {})
export class EnumPlatformFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => Platform, {
    nullable: true
  })
  set?: "IOS" | "ANDROID" | "WEB" | undefined;
}
