import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFavoritesInput } from "../inputs/UserCreateOrConnectWithoutFavoritesInput";
import { UserCreateWithoutFavoritesInput } from "../inputs/UserCreateWithoutFavoritesInput";
import { UserUpdateToOneWithWhereWithoutFavoritesInput } from "../inputs/UserUpdateToOneWithWhereWithoutFavoritesInput";
import { UserUpsertWithoutFavoritesInput } from "../inputs/UserUpsertWithoutFavoritesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutFavoritesNestedInput", {})
export class UserUpdateOneRequiredWithoutFavoritesNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutFavoritesInput, {
    nullable: true
  })
  create?: UserCreateWithoutFavoritesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutFavoritesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFavoritesInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutFavoritesInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutFavoritesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutFavoritesInput, {
    nullable: true
  })
  update?: UserUpdateToOneWithWhereWithoutFavoritesInput | undefined;
}
