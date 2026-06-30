import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutPostReportsInput } from "../inputs/UserCreateOrConnectWithoutPostReportsInput";
import { UserCreateWithoutPostReportsInput } from "../inputs/UserCreateWithoutPostReportsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutPostReportsInput", {})
export class UserCreateNestedOneWithoutPostReportsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutPostReportsInput, {
    nullable: true
  })
  create?: UserCreateWithoutPostReportsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutPostReportsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutPostReportsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
