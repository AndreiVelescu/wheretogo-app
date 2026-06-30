import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutFavoritesInput } from "../inputs/UserCreateWithoutFavoritesInput";
import { UserUpdateWithoutFavoritesInput } from "../inputs/UserUpdateWithoutFavoritesInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpsertWithoutFavoritesInput", {})
export class UserUpsertWithoutFavoritesInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutFavoritesInput, {
    nullable: false
  })
  update!: UserUpdateWithoutFavoritesInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutFavoritesInput, {
    nullable: false
  })
  create!: UserCreateWithoutFavoritesInput;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;
}
