import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripDayWhereInput } from "../inputs/TripDayWhereInput";

@TypeGraphQL.InputType("TripDayRelationFilter", {})
export class TripDayRelationFilter {
  @TypeGraphQL.Field(_type => TripDayWhereInput, {
    nullable: true
  })
  is?: TripDayWhereInput | undefined;

  @TypeGraphQL.Field(_type => TripDayWhereInput, {
    nullable: true
  })
  isNot?: TripDayWhereInput | undefined;
}
