import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostMediaAvgAggregate } from "../outputs/PostMediaAvgAggregate";
import { PostMediaCountAggregate } from "../outputs/PostMediaCountAggregate";
import { PostMediaMaxAggregate } from "../outputs/PostMediaMaxAggregate";
import { PostMediaMinAggregate } from "../outputs/PostMediaMinAggregate";
import { PostMediaSumAggregate } from "../outputs/PostMediaSumAggregate";
import { MediaType } from "../../enums/MediaType";

@TypeGraphQL.ObjectType("PostMediaGroupBy", {
  simpleResolvers: true
})
export class PostMediaGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  postId!: number;

  @TypeGraphQL.Field(_type => MediaType, {
    nullable: false
  })
  type!: "IMAGE" | "VIDEO" | "AUDIO";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  url!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  thumbnail!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  order!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  width!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  height!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  duration!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => PostMediaCountAggregate, {
    nullable: true
  })
  _count!: PostMediaCountAggregate | null;

  @TypeGraphQL.Field(_type => PostMediaAvgAggregate, {
    nullable: true
  })
  _avg!: PostMediaAvgAggregate | null;

  @TypeGraphQL.Field(_type => PostMediaSumAggregate, {
    nullable: true
  })
  _sum!: PostMediaSumAggregate | null;

  @TypeGraphQL.Field(_type => PostMediaMinAggregate, {
    nullable: true
  })
  _min!: PostMediaMinAggregate | null;

  @TypeGraphQL.Field(_type => PostMediaMaxAggregate, {
    nullable: true
  })
  _max!: PostMediaMaxAggregate | null;
}
