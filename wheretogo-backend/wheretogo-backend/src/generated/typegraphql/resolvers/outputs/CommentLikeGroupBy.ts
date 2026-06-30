import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentLikeAvgAggregate } from "../outputs/CommentLikeAvgAggregate";
import { CommentLikeCountAggregate } from "../outputs/CommentLikeCountAggregate";
import { CommentLikeMaxAggregate } from "../outputs/CommentLikeMaxAggregate";
import { CommentLikeMinAggregate } from "../outputs/CommentLikeMinAggregate";
import { CommentLikeSumAggregate } from "../outputs/CommentLikeSumAggregate";

@TypeGraphQL.ObjectType("CommentLikeGroupBy", {
  simpleResolvers: true
})
export class CommentLikeGroupBy {
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
  commentId!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => CommentLikeCountAggregate, {
    nullable: true
  })
  _count!: CommentLikeCountAggregate | null;

  @TypeGraphQL.Field(_type => CommentLikeAvgAggregate, {
    nullable: true
  })
  _avg!: CommentLikeAvgAggregate | null;

  @TypeGraphQL.Field(_type => CommentLikeSumAggregate, {
    nullable: true
  })
  _sum!: CommentLikeSumAggregate | null;

  @TypeGraphQL.Field(_type => CommentLikeMinAggregate, {
    nullable: true
  })
  _min!: CommentLikeMinAggregate | null;

  @TypeGraphQL.Field(_type => CommentLikeMaxAggregate, {
    nullable: true
  })
  _max!: CommentLikeMaxAggregate | null;
}
