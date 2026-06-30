import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SharePlatform } from "../../enums/SharePlatform";

@TypeGraphQL.ObjectType("PostShareMaxAggregate", {
  simpleResolvers: true
})
export class PostShareMaxAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  userId!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  postId!: number | null;

  @TypeGraphQL.Field(_type => SharePlatform, {
    nullable: true
  })
  platform!: "INTERNAL" | "FACEBOOK" | "INSTAGRAM" | "TWITTER" | "WHATSAPP" | "LINK" | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;
}
