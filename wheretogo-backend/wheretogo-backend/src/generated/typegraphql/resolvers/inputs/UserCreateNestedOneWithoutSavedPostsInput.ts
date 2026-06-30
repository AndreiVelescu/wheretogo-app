import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutSavedPostsInput } from "../inputs/UserCreateOrConnectWithoutSavedPostsInput";
import { UserCreateWithoutSavedPostsInput } from "../inputs/UserCreateWithoutSavedPostsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutSavedPostsInput", {})
export class UserCreateNestedOneWithoutSavedPostsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutSavedPostsInput, {
    nullable: true
  })
  create?: UserCreateWithoutSavedPostsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutSavedPostsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutSavedPostsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
