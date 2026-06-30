import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutPostSharesInput } from "../inputs/UserCreateWithoutPostSharesInput";
import { UserUpdateWithoutPostSharesInput } from "../inputs/UserUpdateWithoutPostSharesInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpsertWithoutPostSharesInput", {})
export class UserUpsertWithoutPostSharesInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutPostSharesInput, {
    nullable: false
  })
  update!: UserUpdateWithoutPostSharesInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutPostSharesInput, {
    nullable: false
  })
  create!: UserCreateWithoutPostSharesInput;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;
}
