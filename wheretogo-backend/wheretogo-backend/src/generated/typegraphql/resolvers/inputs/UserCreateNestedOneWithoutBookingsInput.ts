import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutBookingsInput } from "../inputs/UserCreateOrConnectWithoutBookingsInput";
import { UserCreateWithoutBookingsInput } from "../inputs/UserCreateWithoutBookingsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutBookingsInput", {})
export class UserCreateNestedOneWithoutBookingsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutBookingsInput, {
    nullable: true
  })
  create?: UserCreateWithoutBookingsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutBookingsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutBookingsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
