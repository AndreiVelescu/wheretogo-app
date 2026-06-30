import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCollectionItemAvgAggregate } from "../outputs/PostCollectionItemAvgAggregate";
import { PostCollectionItemCountAggregate } from "../outputs/PostCollectionItemCountAggregate";
import { PostCollectionItemMaxAggregate } from "../outputs/PostCollectionItemMaxAggregate";
import { PostCollectionItemMinAggregate } from "../outputs/PostCollectionItemMinAggregate";
import { PostCollectionItemSumAggregate } from "../outputs/PostCollectionItemSumAggregate";

@TypeGraphQL.ObjectType("AggregatePostCollectionItem", {
  simpleResolvers: true
})
export class AggregatePostCollectionItem {
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
