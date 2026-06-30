import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutCommentLikesInput } from "../inputs/UserUpdateWithoutCommentLikesInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutCommentLikesInput", {})
export class UserUpdateToOneWithWhereWithoutCommentLikesInput {
  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutCommentLikesInput, {
    nullable: false
  })
  data!: UserUpdateWithoutCommentLikesInput;
}
