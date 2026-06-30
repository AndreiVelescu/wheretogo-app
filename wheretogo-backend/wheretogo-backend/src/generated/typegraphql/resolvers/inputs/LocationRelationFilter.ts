import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationWhereInput } from "../inputs/LocationWhereInput";

@TypeGraphQL.InputType("LocationRelationFilter", {})
export class LocationRelationFilter {
  @TypeGraphQL.Field(_type => LocationWhereInput, {
    nullable: true
  })
  is?: LocationWhereInput | undefined;

  @TypeGraphQL.Field(_type => LocationWhereInput, {
    nullable: true
  })
  isNot?: LocationWhereInput | undefined;
}
