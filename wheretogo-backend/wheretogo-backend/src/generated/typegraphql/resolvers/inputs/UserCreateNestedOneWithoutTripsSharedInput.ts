import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutTripsSharedInput } from "../inputs/UserCreateOrConnectWithoutTripsSharedInput";
import { UserCreateWithoutTripsSharedInput } from "../inputs/UserCreateWithoutTripsSharedInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutTripsSharedInput", {})
export class UserCreateNestedOneWithoutTripsSharedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutTripsSharedInput, {
    nullable: true
  })
  create?: UserCreateWithoutTripsSharedInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutTripsSharedInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutTripsSharedInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
