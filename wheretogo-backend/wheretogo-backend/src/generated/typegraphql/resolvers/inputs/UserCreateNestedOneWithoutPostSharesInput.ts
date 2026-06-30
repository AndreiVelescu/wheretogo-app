import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutPostSharesInput } from "../inputs/UserCreateOrConnectWithoutPostSharesInput";
import { UserCreateWithoutPostSharesInput } from "../inputs/UserCreateWithoutPostSharesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutPostSharesInput", {})
export class UserCreateNestedOneWithoutPostSharesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutPostSharesInput, {
    nullable: true
  })
  create?: UserCreateWithoutPostSharesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutPostSharesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutPostSharesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
