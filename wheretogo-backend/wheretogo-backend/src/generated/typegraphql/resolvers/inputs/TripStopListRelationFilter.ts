import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripStopWhereInput } from "../inputs/TripStopWhereInput";

@TypeGraphQL.InputType("TripStopListRelationFilter", {})
export class TripStopListRelationFilter {
  @TypeGraphQL.Field(_type => TripStopWhereInput, {
    nullable: true
  })
  every?: TripStopWhereInput | undefined;

  @TypeGraphQL.Field(_type => TripStopWhereInput, {
    nullable: true
  })
  some?: TripStopWhereInput | undefined;

  @TypeGraphQL.Field(_type => TripStopWhereInput, {
    nullable: true
  })
  none?: TripStopWhereInput | undefined;
}
