import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutFavoritesInput } from "../inputs/UserCreateNestedOneWithoutFavoritesInput";

@TypeGraphQL.InputType("FavoriteCreateWithoutLocationInput", {})
export class FavoriteCreateWithoutLocationInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutFavoritesInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutFavoritesInput;
}
