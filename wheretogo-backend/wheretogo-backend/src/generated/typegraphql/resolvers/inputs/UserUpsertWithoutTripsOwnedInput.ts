import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutTripsOwnedInput } from "../inputs/UserCreateWithoutTripsOwnedInput";
import { UserUpdateWithoutTripsOwnedInput } from "../inputs/UserUpdateWithoutTripsOwnedInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpsertWithoutTripsOwnedInput", {})
export class UserUpsertWithoutTripsOwnedInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutTripsOwnedInput, {
    nullable: false
  })
  update!: UserUpdateWithoutTripsOwnedInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutTripsOwnedInput, {
    nullable: false
  })
  create!: UserCreateWithoutTripsOwnedInput;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;
}
