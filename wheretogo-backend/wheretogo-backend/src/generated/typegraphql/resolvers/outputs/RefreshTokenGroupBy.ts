import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RefreshTokenAvgAggregate } from "../outputs/RefreshTokenAvgAggregate";
import { RefreshTokenCountAggregate } from "../outputs/RefreshTokenCountAggregate";
import { RefreshTokenMaxAggregate } from "../outputs/RefreshTokenMaxAggregate";
import { RefreshTokenMinAggregate } from "../outputs/RefreshTokenMinAggregate";
import { RefreshTokenSumAggregate } from "../outputs/RefreshTokenSumAggregate";

@TypeGraphQL.ObjectType("RefreshTokenGroupBy", {
  simpleResolvers: true
})
export class RefreshTokenGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  token!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  expiresAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => RefreshTokenCountAggregate, {
    nullable: true
  })
  _count!: RefreshTokenCountAggregate | null;

  @TypeGraphQL.Field(_type => RefreshTokenAvgAggregate, {
    nullable: true
  })
  _avg!: RefreshTokenAvgAggregate | null;

  @TypeGraphQL.Field(_type => RefreshTokenSumAggregate, {
    nullable: true
  })
  _sum!: RefreshTokenSumAggregate | null;

  @TypeGraphQL.Field(_type => RefreshTokenMinAggregate, {
    nullable: true
  })
  _min!: RefreshTokenMinAggregate | null;

  @TypeGraphQL.Field(_type => RefreshTokenMaxAggregate, {
    nullable: true
  })
  _max!: RefreshTokenMaxAggregate | null;
}
