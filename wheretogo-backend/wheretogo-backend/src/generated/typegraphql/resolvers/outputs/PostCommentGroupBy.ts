import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCommentAvgAggregate } from "../outputs/PostCommentAvgAggregate";
import { PostCommentCountAggregate } from "../outputs/PostCommentCountAggregate";
import { PostCommentMaxAggregate } from "../outputs/PostCommentMaxAggregate";
import { PostCommentMinAggregate } from "../outputs/PostCommentMinAggregate";
import { PostCommentSumAggregate } from "../outputs/PostCommentSumAggregate";

@TypeGraphQL.ObjectType("PostCommentGroupBy", {
  simpleResolvers: true
})
export class PostCommentGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  postId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  authorId!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  content!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  parentId!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  likesCount!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  editedAt!: Date | null;

  @TypeGraphQL.Field(_type => PostCommentCountAggregate, {
    nullable: true
  })
  _count!: PostCommentCountAggregate | null;

  @TypeGraphQL.Field(_type => PostCommentAvgAggregate, {
    nullable: true
  })
  _avg!: PostCommentAvgAggregate | null;

  @TypeGraphQL.Field(_type => PostCommentSumAggregate, {
    nullable: true
  })
  _sum!: PostCommentSumAggregate | null;

  @TypeGraphQL.Field(_type => PostCommentMinAggregate, {
    nullable: true
  })
  _min!: PostCommentMinAggregate | null;

  @TypeGraphQL.Field(_type => PostCommentMaxAggregate, {
    nullable: true
  })
  _max!: PostCommentMaxAggregate | null;
}
