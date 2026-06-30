import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutCommentLikesInput } from "../inputs/UserCreateWithoutCommentLikesInput";
import { UserUpdateWithoutCommentLikesInput } from "../inputs/UserUpdateWithoutCommentLikesInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpsertWithoutCommentLikesInput", {})
export class UserUpsertWithoutCommentLikesInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutCommentLikesInput, {
    nullable: false
  })
  update!: UserUpdateWithoutCommentLikesInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutCommentLikesInput, {
    nullable: false
  })
  create!: UserCreateWithoutCommentLikesInput;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;
}
