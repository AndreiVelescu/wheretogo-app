import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutCollectionsInput } from "../inputs/UserCreateOrConnectWithoutCollectionsInput";
import { UserCreateWithoutCollectionsInput } from "../inputs/UserCreateWithoutCollectionsInput";
import { UserUpdateToOneWithWhereWithoutCollectionsInput } from "../inputs/UserUpdateToOneWithWhereWithoutCollectionsInput";
import { UserUpsertWithoutCollectionsInput } from "../inputs/UserUpsertWithoutCollectionsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutCollectionsNestedInput", {})
export class UserUpdateOneRequiredWithoutCollectionsNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutCollectionsInput, {
    nullable: true
  })
  create?: UserCreateWithoutCollectionsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCollectionsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutCollectionsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutCollectionsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutCollectionsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutCollectionsInput, {
    nullable: true
  })
  update?: UserUpdateToOneWithWhereWithoutCollectionsInput | undefined;
}
