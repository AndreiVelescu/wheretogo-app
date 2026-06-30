import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripAvgAggregate } from "../outputs/TripAvgAggregate";
import { TripCountAggregate } from "../outputs/TripCountAggregate";
import { TripMaxAggregate } from "../outputs/TripMaxAggregate";
import { TripMinAggregate } from "../outputs/TripMinAggregate";
import { TripSumAggregate } from "../outputs/TripSumAggregate";
import { TripStatus } from "../../enums/TripStatus";

@TypeGraphQL.ObjectType("TripGroupBy", {
  simpleResolvers: true
})
export class TripGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  ownerId!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => TripStatus, {
    nullable: false
  })
  status!: "DRAFT" | "PLANNED" | "ACTIVE" | "COMPLETED" | "CANCELLED";

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  startDate!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  endDate!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  city!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  country!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isPublic!: boolean;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  totalBudget!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  currency!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => TripCountAggregate, {
    nullable: true
  })
  _count!: TripCountAggregate | null;

  @TypeGraphQL.Field(_type => TripAvgAggregate, {
    nullable: true
  })
  _avg!: TripAvgAggregate | null;

  @TypeGraphQL.Field(_type => TripSumAggregate, {
    nullable: true
  })
  _sum!: TripSumAggregate | null;

  @TypeGraphQL.Field(_type => TripMinAggregate, {
    nullable: true
  })
  _min!: TripMinAggregate | null;

  @TypeGraphQL.Field(_type => TripMaxAggregate, {
    nullable: true
  })
  _max!: TripMaxAggregate | null;
}
