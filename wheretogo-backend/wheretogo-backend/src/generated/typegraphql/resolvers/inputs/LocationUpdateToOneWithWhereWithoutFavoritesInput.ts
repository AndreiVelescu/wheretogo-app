import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationUpdateWithoutFavoritesInput } from "../inputs/LocationUpdateWithoutFavoritesInput";
import { LocationWhereInput } from "../inputs/LocationWhereInput";

@TypeGraphQL.InputType("LocationUpdateToOneWithWhereWithoutFavoritesInput", {})
export class LocationUpdateToOneWithWhereWithoutFavoritesInput {
  @TypeGraphQL.Field(_type => LocationWhereInput, {
    nullable: true
  })
  where?: LocationWhereInput | undefined;

  @TypeGraphQL.Field(_type => LocationUpdateWithoutFavoritesInput, {
    nullable: false
  })
  data!: LocationUpdateWithoutFavoritesInput;
}
