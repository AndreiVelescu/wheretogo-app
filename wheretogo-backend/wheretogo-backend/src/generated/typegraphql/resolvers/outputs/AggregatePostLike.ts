import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostLikeAvgAggregate } from "../outputs/PostLikeAvgAggregate";
import { PostLikeCountAggregate } from "../outputs/PostLikeCountAggregate";
import { PostLikeMaxAggregate } from "../outputs/PostLikeMaxAggregate";
import { PostLikeMinAggregate } from "../outputs/PostLikeMinAggregate";
import { PostLikeSumAggregate } from "../outputs/PostLikeSumAggregate";

@TypeGraphQL.ObjectType("AggregatePostLike", {
  simpleResolvers: true
})
export class AggregatePostLike {
  @TypeGraphQL.Field(_type => PostLikeCountAggregate, {
    nullable: true
  })
  _count!: PostLikeCountAggregate | null;

  @TypeGraphQL.Field(_type => PostLikeAvgAggregate, {
    nullable: true
  })
  _avg!: PostLikeAvgAggregate | null;

  @TypeGraphQL.Field(_type => PostLikeSumAggregate, {
    nullable: true
  })
  _sum!: PostLikeSumAggregate | null;

  @TypeGraphQL.Field(_type => PostLikeMinAggregate, {
    nullable: true
  })
  _min!: PostLikeMinAggregate | null;

  @TypeGraphQL.Field(_type => PostLikeMaxAggregate, {
    nullable: true
  })
  _max!: PostLikeMaxAggregate | null;
}
