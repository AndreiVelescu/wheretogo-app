import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutTripsOwnedInput } from "../inputs/UserCreateWithoutTripsOwnedInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutTripsOwnedInput", {})
export class UserCreateOrConnectWithoutTripsOwnedInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutTripsOwnedInput, {
    nullable: false
  })
  create!: UserCreateWithoutTripsOwnedInput;
}
