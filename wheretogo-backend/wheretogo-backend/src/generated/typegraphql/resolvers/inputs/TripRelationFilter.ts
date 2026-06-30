import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripWhereInput } from "../inputs/TripWhereInput";

@TypeGraphQL.InputType("TripRelationFilter", {})
export class TripRelationFilter {
  @TypeGraphQL.Field(_type => TripWhereInput, {
    nullable: true
  })
  is?: TripWhereInput | undefined;

  @TypeGraphQL.Field(_type => TripWhereInput, {
    nullable: true
  })
  isNot?: TripWhereInput | undefined;
}
