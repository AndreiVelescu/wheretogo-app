import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFavoritesInput } from "../inputs/UserCreateOrConnectWithoutFavoritesInput";
import { UserCreateWithoutFavoritesInput } from "../inputs/UserCreateWithoutFavoritesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutFavoritesInput", {})
export class UserCreateNestedOneWithoutFavoritesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutFavoritesInput, {
    nullable: true
  })
  create?: UserCreateWithoutFavoritesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutFavoritesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFavoritesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
