import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCollectionItemAvgAggregate } from "../outputs/PostCollectionItemAvgAggregate";
import { PostCollectionItemCountAggregate } from "../outputs/PostCollectionItemCountAggregate";
import { PostCollectionItemMaxAggregate } from "../outputs/PostCollectionItemMaxAggregate";
import { PostCollectionItemMinAggregate } from "../outputs/PostCollectionItemMinAggregate";
import { PostCollectionItemSumAggregate } from "../outputs/PostCollectionItemSumAggregate";

@TypeGraphQL.ObjectType("PostCollectionItemGroupBy", {
  simpleResolvers: true
})
export class PostCollectionItemGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  collectionId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  postId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  order!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  note!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  addedAt!: Date;

  @TypeGraphQL.Field(_type => PostCollectionItemCountAggregate, {
    nullable: true
  })
  _count!: PostCollectionItemCountAggregate | null;

  @TypeGraphQL.Field(_type => PostCollectionItemAvgAggregate, {
    nullable: true
  })
  _avg!: PostCollectionItemAvgAggregate | null;

  @TypeGraphQL.Field(_type => PostCollectionItemSumAggregate, {
    nullable: true
  })
  _sum!: PostCollectionItemSumAggregate | null;

  @TypeGraphQL.Field(_type => PostCollectionItemMinAggregate, {
    nullable: true
  })
  _min!: PostCollectionItemMinAggregate | null;

  @TypeGraphQL.Field(_type => PostCollectionItemMaxAggregate, {
    nullable: true
  })
  _max!: PostCollectionItemMaxAggregate | null;
}
