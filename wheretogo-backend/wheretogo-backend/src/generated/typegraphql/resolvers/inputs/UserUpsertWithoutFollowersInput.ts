import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutFollowersInput } from "../inputs/UserCreateWithoutFollowersInput";
import { UserUpdateWithoutFollowersInput } from "../inputs/UserUpdateWithoutFollowersInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpsertWithoutFollowersInput", {})
export class UserUpsertWithoutFollowersInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutFollowersInput, {
    nullable: false
  })
  update!: UserUpdateWithoutFollowersInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutFollowersInput, {
    nullable: false
  })
  create!: UserCreateWithoutFollowersInput;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;
}
