import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SharePlatform } from "../../enums/SharePlatform";

@TypeGraphQL.InputType("PostShareCreateManyPostInput", {})
export class PostShareCreateManyPostInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  @TypeGraphQL.Field(_type => SharePlatform, {
    nullable: true
  })
  platform?: "INTERNAL" | "FACEBOOK" | "INSTAGRAM" | "TWITTER" | "WHATSAPP" | "LINK" | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;
}
