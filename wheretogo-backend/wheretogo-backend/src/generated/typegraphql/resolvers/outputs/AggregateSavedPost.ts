import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SavedPostAvgAggregate } from "../outputs/SavedPostAvgAggregate";
import { SavedPostCountAggregate } from "../outputs/SavedPostCountAggregate";
import { SavedPostMaxAggregate } from "../outputs/SavedPostMaxAggregate";
import { SavedPostMinAggregate } from "../outputs/SavedPostMinAggregate";
import { SavedPostSumAggregate } from "../outputs/SavedPostSumAggregate";

@TypeGraphQL.ObjectType("AggregateSavedPost", {
  simpleResolvers: true
})
export class AggregateSavedPost {
  @TypeGraphQL.Field(_type => SavedPostCountAggregate, {
    nullable: true
  })
  _count!: SavedPostCountAggregate | null;

  @TypeGraphQL.Field(_type => SavedPostAvgAggregate, {
    nullable: true
  })
  _avg!: SavedPostAvgAggregate | null;

  @TypeGraphQL.Field(_type => SavedPostSumAggregate, {
    nullable: true
  })
  _sum!: SavedPostSumAggregate | null;

  @TypeGraphQL.Field(_type => SavedPostMinAggregate, {
    nullable: true
  })
  _min!: SavedPostMinAggregate | null;

  @TypeGraphQL.Field(_type => SavedPostMaxAggregate, {
    nullable: true
  })
  _max!: SavedPostMaxAggregate | null;
}
