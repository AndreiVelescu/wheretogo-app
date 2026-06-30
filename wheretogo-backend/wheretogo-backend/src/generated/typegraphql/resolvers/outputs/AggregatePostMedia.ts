import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostMediaAvgAggregate } from "../outputs/PostMediaAvgAggregate";
import { PostMediaCountAggregate } from "../outputs/PostMediaCountAggregate";
import { PostMediaMaxAggregate } from "../outputs/PostMediaMaxAggregate";
import { PostMediaMinAggregate } from "../outputs/PostMediaMinAggregate";
import { PostMediaSumAggregate } from "../outputs/PostMediaSumAggregate";

@TypeGraphQL.ObjectType("AggregatePostMedia", {
  simpleResolvers: true
})
export class AggregatePostMedia {
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
