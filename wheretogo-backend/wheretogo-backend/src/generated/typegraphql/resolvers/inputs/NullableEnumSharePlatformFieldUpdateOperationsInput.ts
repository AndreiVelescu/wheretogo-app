import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SharePlatform } from "../../enums/SharePlatform";

@TypeGraphQL.InputType("NullableEnumSharePlatformFieldUpdateOperationsInput", {})
export class NullableEnumSharePlatformFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => SharePlatform, {
    nullable: true
  })
  set?: "INTERNAL" | "FACEBOOK" | "INSTAGRAM" | "TWITTER" | "WHATSAPP" | "LINK" | undefined;
}
