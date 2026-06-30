import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutPostReportsInput } from "../inputs/UserCreateWithoutPostReportsInput";
import { UserUpdateWithoutPostReportsInput } from "../inputs/UserUpdateWithoutPostReportsInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpsertWithoutPostReportsInput", {})
export class UserUpsertWithoutPostReportsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutPostReportsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutPostReportsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutPostReportsInput, {
    nullable: false
  })
  create!: UserCreateWithoutPostReportsInput;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;
}
