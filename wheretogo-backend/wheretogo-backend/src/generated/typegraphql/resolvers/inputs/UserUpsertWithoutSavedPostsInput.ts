import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutSavedPostsInput } from "../inputs/UserCreateWithoutSavedPostsInput";
import { UserUpdateWithoutSavedPostsInput } from "../inputs/UserUpdateWithoutSavedPostsInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpsertWithoutSavedPostsInput", {})
export class UserUpsertWithoutSavedPostsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutSavedPostsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutSavedPostsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutSavedPostsInput, {
    nullable: false
  })
  create!: UserCreateWithoutSavedPostsInput;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;
}
