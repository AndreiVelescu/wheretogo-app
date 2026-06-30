import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCollectionAvgAggregate } from "../outputs/PostCollectionAvgAggregate";
import { PostCollectionCountAggregate } from "../outputs/PostCollectionCountAggregate";
import { PostCollectionMaxAggregate } from "../outputs/PostCollectionMaxAggregate";
import { PostCollectionMinAggregate } from "../outputs/PostCollectionMinAggregate";
import { PostCollectionSumAggregate } from "../outputs/PostCollectionSumAggregate";

@TypeGraphQL.ObjectType("AggregatePostCollection", {
  simpleResolvers: true
})
export class AggregatePostCollection {
  @TypeGraphQL.Field(_type => PostCollectionCountAggregate, {
    nullable: true
  })
  _count!: PostCollectionCountAggregate | null;

  @TypeGraphQL.Field(_type => PostCollectionAvgAggregate, {
    nullable: true
  })
  _avg!: PostCollectionAvgAggregate | null;

  @TypeGraphQL.Field(_type => PostCollectionSumAggregate, {
    nullable: true
  })
  _sum!: PostCollectionSumAggregate | null;

  @TypeGraphQL.Field(_type => PostCollectionMinAggregate, {
    nullable: true
  })
  _min!: PostCollectionMinAggregate | null;

  @TypeGraphQL.Field(_type => PostCollectionMaxAggregate, {
    nullable: true
  })
  _max!: PostCollectionMaxAggregate | null;
}
