import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutFavoritesInput } from "../inputs/UserUpdateWithoutFavoritesInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutFavoritesInput", {})
export class UserUpdateToOneWithWhereWithoutFavoritesInput {
  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutFavoritesInput, {
    nullable: false
  })
  data!: UserUpdateWithoutFavoritesInput;
}
