import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAvgAggregate } from "../outputs/LocationAvgAggregate";
import { LocationCountAggregate } from "../outputs/LocationCountAggregate";
import { LocationMaxAggregate } from "../outputs/LocationMaxAggregate";
import { LocationMinAggregate } from "../outputs/LocationMinAggregate";
import { LocationSumAggregate } from "../outputs/LocationSumAggregate";

@TypeGraphQL.ObjectType("LocationGroupBy", {
  simpleResolvers: true
})
export class LocationGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  placeId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  type!: string;

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  types!: string[] | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  priceRange!: string | null;

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  vibes!: string[] | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  lat!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  lng!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  rating!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  userRatingsTotal!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  website!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  phone!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  googleUrl!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  openHours!: string | null;

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  photos!: string[] | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  menuPdf!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  popularityScore!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  estimatedCost!: number | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  googleImported!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => LocationCountAggregate, {
    nullable: true
  })
  _count!: LocationCountAggregate | null;

  @TypeGraphQL.Field(_type => LocationAvgAggregate, {
    nullable: true
  })
  _avg!: LocationAvgAggregate | null;

  @TypeGraphQL.Field(_type => LocationSumAggregate, {
    nullable: true
  })
  _sum!: LocationSumAggregate | null;

  @TypeGraphQL.Field(_type => LocationMinAggregate, {
    nullable: true
  })
  _min!: LocationMinAggregate | null;

  @TypeGraphQL.Field(_type => LocationMaxAggregate, {
    nullable: true
  })
  _max!: LocationMaxAggregate | null;
}
