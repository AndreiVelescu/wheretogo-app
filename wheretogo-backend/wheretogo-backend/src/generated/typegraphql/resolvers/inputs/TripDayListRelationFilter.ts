import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripDayWhereInput } from "../inputs/TripDayWhereInput";

@TypeGraphQL.InputType("TripDayListRelationFilter", {})
export class TripDayListRelationFilter {
  @TypeGraphQL.Field(_type => TripDayWhereInput, {
    nullable: true
  })
  every?: TripDayWhereInput | undefined;

  @TypeGraphQL.Field(_type => TripDayWhereInput, {
    nullable: true
  })
  some?: TripDayWhereInput | undefined;

  @TypeGraphQL.Field(_type => TripDayWhereInput, {
    nullable: true
  })
  none?: TripDayWhereInput | undefined;
}
