import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateWithoutFavoritesInput } from "../inputs/LocationCreateWithoutFavoritesInput";
import { LocationUpdateWithoutFavoritesInput } from "../inputs/LocationUpdateWithoutFavoritesInput";
import { LocationWhereInput } from "../inputs/LocationWhereInput";

@TypeGraphQL.InputType("LocationUpsertWithoutFavoritesInput", {})
export class LocationUpsertWithoutFavoritesInput {
  @TypeGraphQL.Field(_type => LocationUpdateWithoutFavoritesInput, {
    nullable: false
  })
  update!: LocationUpdateWithoutFavoritesInput;

  @TypeGraphQL.Field(_type => LocationCreateWithoutFavoritesInput, {
    nullable: false
  })
  create!: LocationCreateWithoutFavoritesInput;

  @TypeGraphQL.Field(_type => LocationWhereInput, {
    nullable: true
  })
  where?: LocationWhereInput | undefined;
}
