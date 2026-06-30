import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutSavedPostsInput } from "../inputs/UserCreateOrConnectWithoutSavedPostsInput";
import { UserCreateWithoutSavedPostsInput } from "../inputs/UserCreateWithoutSavedPostsInput";
import { UserUpdateToOneWithWhereWithoutSavedPostsInput } from "../inputs/UserUpdateToOneWithWhereWithoutSavedPostsInput";
import { UserUpsertWithoutSavedPostsInput } from "../inputs/UserUpsertWithoutSavedPostsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutSavedPostsNestedInput", {})
export class UserUpdateOneRequiredWithoutSavedPostsNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutSavedPostsInput, {
    nullable: true
  })
  create?: UserCreateWithoutSavedPostsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutSavedPostsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutSavedPostsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutSavedPostsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutSavedPostsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutSavedPostsInput, {
    nullable: true
  })
  update?: UserUpdateToOneWithWhereWithoutSavedPostsInput | undefined;
}
