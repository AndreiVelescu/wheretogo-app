import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Trip } from "../models/Trip";
import { TripStop } from "../models/TripStop";
import { TripDayCount } from "../resolvers/outputs/TripDayCount";

@TypeGraphQL.ObjectType("TripDay", {
  simpleResolvers: true
})
export class TripDay {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  trip?: Trip;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  tripId!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  dayNumber!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  notes?: string | null;

  stops?: TripStop[];

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => TripDayCount, {
    nullable: true
  })
  _count?: TripDayCount | null;
}
