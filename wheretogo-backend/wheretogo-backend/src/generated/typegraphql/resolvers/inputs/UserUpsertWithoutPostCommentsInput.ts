import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutPostCommentsInput } from "../inputs/UserCreateWithoutPostCommentsInput";
import { UserUpdateWithoutPostCommentsInput } from "../inputs/UserUpdateWithoutPostCommentsInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpsertWithoutPostCommentsInput", {})
export class UserUpsertWithoutPostCommentsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutPostCommentsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutPostCommentsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutPostCommentsInput, {
    nullable: false
  })
  create!: UserCreateWithoutPostCommentsInput;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;
}
