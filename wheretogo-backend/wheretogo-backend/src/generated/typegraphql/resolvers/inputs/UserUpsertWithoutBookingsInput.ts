import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutBookingsInput } from "../inputs/UserCreateWithoutBookingsInput";
import { UserUpdateWithoutBookingsInput } from "../inputs/UserUpdateWithoutBookingsInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpsertWithoutBookingsInput", {})
export class UserUpsertWithoutBookingsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutBookingsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutBookingsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutBookingsInput, {
    nullable: false
  })
  create!: UserCreateWithoutBookingsInput;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;
}
