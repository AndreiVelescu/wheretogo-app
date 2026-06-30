import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutReviewsInput } from "../inputs/UserCreateWithoutReviewsInput";
import { UserUpdateWithoutReviewsInput } from "../inputs/UserUpdateWithoutReviewsInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpsertWithoutReviewsInput", {})
export class UserUpsertWithoutReviewsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutReviewsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutReviewsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutReviewsInput, {
    nullable: false
  })
  create!: UserCreateWithoutReviewsInput;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;
}
