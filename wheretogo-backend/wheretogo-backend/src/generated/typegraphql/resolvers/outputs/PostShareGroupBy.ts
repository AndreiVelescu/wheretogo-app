import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostShareAvgAggregate } from "../outputs/PostShareAvgAggregate";
import { PostShareCountAggregate } from "../outputs/PostShareCountAggregate";
import { PostShareMaxAggregate } from "../outputs/PostShareMaxAggregate";
import { PostShareMinAggregate } from "../outputs/PostShareMinAggregate";
import { PostShareSumAggregate } from "../outputs/PostShareSumAggregate";
import { SharePlatform } from "../../enums/SharePlatform";

@TypeGraphQL.ObjectType("PostShareGroupBy", {
  simpleResolvers: true
})
export class PostShareGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  postId!: number;

  @TypeGraphQL.Field(_type => SharePlatform, {
    nullable: true
  })
  platform!: "INTERNAL" | "FACEBOOK" | "INSTAGRAM" | "TWITTER" | "WHATSAPP" | "LINK" | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => PostShareCountAggregate, {
    nullable: true
  })
  _count!: PostShareCountAggregate | null;

  @TypeGraphQL.Field(_type => PostShareAvgAggregate, {
    nullable: true
  })
  _avg!: PostShareAvgAggregate | null;

  @TypeGraphQL.Field(_type => PostShareSumAggregate, {
    nullable: true
  })
  _sum!: PostShareSumAggregate | null;

  @TypeGraphQL.Field(_type => PostShareMinAggregate, {
    nullable: true
  })
  _min!: PostShareMinAggregate | null;

  @TypeGraphQL.Field(_type => PostShareMaxAggregate, {
    nullable: true
  })
  _max!: PostShareMaxAggregate | null;
}
