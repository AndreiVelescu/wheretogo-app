import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutTripsOwnedInput } from "../inputs/UserCreateOrConnectWithoutTripsOwnedInput";
import { UserCreateWithoutTripsOwnedInput } from "../inputs/UserCreateWithoutTripsOwnedInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutTripsOwnedInput", {})
export class UserCreateNestedOneWithoutTripsOwnedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutTripsOwnedInput, {
    nullable: true
  })
  create?: UserCreateWithoutTripsOwnedInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutTripsOwnedInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutTripsOwnedInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
