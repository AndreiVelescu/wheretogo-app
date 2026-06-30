import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateNestedOneWithoutFavoritesInput } from "../inputs/LocationCreateNestedOneWithoutFavoritesInput";

@TypeGraphQL.InputType("FavoriteCreateWithoutUserInput", {})
export class FavoriteCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => LocationCreateNestedOneWithoutFavoritesInput, {
    nullable: false
  })
  location!: LocationCreateNestedOneWithoutFavoritesInput;
}
