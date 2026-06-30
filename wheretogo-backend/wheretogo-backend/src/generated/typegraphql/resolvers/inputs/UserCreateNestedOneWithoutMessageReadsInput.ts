import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutMessageReadsInput } from "../inputs/UserCreateOrConnectWithoutMessageReadsInput";
import { UserCreateWithoutMessageReadsInput } from "../inputs/UserCreateWithoutMessageReadsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutMessageReadsInput", {})
export class UserCreateNestedOneWithoutMessageReadsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutMessageReadsInput, {
    nullable: true
  })
  create?: UserCreateWithoutMessageReadsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutMessageReadsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutMessageReadsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
