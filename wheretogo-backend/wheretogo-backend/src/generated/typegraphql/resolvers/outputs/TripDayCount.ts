import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripDayCountStopsArgs } from "./args/TripDayCountStopsArgs";

@TypeGraphQL.ObjectType("TripDayCount", {
  simpleResolvers: true
})
export class TripDayCount {
  stops!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "stops",
    nullable: false
  })
  getStops(@TypeGraphQL.Root() root: TripDayCount, @TypeGraphQL.Args() args: TripDayCountStopsArgs): number {
    return root.stops;
  }
}
