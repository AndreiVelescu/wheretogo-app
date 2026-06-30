import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutPostLikesInput } from "../inputs/UserCreateWithoutPostLikesInput";
import { UserUpdateWithoutPostLikesInput } from "../inputs/UserUpdateWithoutPostLikesInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpsertWithoutPostLikesInput", {})
export class UserUpsertWithoutPostLikesInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutPostLikesInput, {
    nullable: false
  })
  update!: UserUpdateWithoutPostLikesInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutPostLikesInput, {
    nullable: false
  })
  create!: UserCreateWithoutPostLikesInput;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;
}
