import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowerAvgAggregate } from "../outputs/FollowerAvgAggregate";
import { FollowerCountAggregate } from "../outputs/FollowerCountAggregate";
import { FollowerMaxAggregate } from "../outputs/FollowerMaxAggregate";
import { FollowerMinAggregate } from "../outputs/FollowerMinAggregate";
import { FollowerSumAggregate } from "../outputs/FollowerSumAggregate";

@TypeGraphQL.ObjectType("FollowerGroupBy", {
  simpleResolvers: true
})
export class FollowerGroupBy {
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
  followerId!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => FollowerCountAggregate, {
    nullable: true
  })
  _count!: FollowerCountAggregate | null;

  @TypeGraphQL.Field(_type => FollowerAvgAggregate, {
    nullable: true
  })
  _avg!: FollowerAvgAggregate | null;

  @TypeGraphQL.Field(_type => FollowerSumAggregate, {
    nullable: true
  })
  _sum!: FollowerSumAggregate | null;

  @TypeGraphQL.Field(_type => FollowerMinAggregate, {
    nullable: true
  })
  _min!: FollowerMinAggregate | null;

  @TypeGraphQL.Field(_type => FollowerMaxAggregate, {
    nullable: true
  })
  _max!: FollowerMaxAggregate | null;
}
