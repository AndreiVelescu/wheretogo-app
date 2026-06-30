import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutBookingsInput } from "../inputs/UserCreateOrConnectWithoutBookingsInput";
import { UserCreateWithoutBookingsInput } from "../inputs/UserCreateWithoutBookingsInput";
import { UserUpdateToOneWithWhereWithoutBookingsInput } from "../inputs/UserUpdateToOneWithWhereWithoutBookingsInput";
import { UserUpsertWithoutBookingsInput } from "../inputs/UserUpsertWithoutBookingsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutBookingsNestedInput", {})
export class UserUpdateOneRequiredWithoutBookingsNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutBookingsInput, {
    nullable: true
  })
  create?: UserCreateWithoutBookingsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutBookingsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutBookingsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutBookingsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutBookingsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutBookingsInput, {
    nullable: true
  })
  update?: UserUpdateToOneWithWhereWithoutBookingsInput | undefined;
}
