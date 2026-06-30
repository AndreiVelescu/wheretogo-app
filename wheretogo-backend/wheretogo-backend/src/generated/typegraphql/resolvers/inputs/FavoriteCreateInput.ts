import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateNestedOneWithoutFavoritesInput } from "../inputs/LocationCreateNestedOneWithoutFavoritesInput";
import { UserCreateNestedOneWithoutFavoritesInput } from "../inputs/UserCreateNestedOneWithoutFavoritesInput";

@TypeGraphQL.InputType("FavoriteCreateInput", {})
export class FavoriteCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutFavoritesInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutFavoritesInput;

  @TypeGraphQL.Field(_type => LocationCreateNestedOneWithoutFavoritesInput, {
    nullable: false
  })
  location!: LocationCreateNestedOneWithoutFavoritesInput;
}
