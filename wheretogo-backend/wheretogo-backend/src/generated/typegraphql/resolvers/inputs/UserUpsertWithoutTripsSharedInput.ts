import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutTripsSharedInput } from "../inputs/UserCreateWithoutTripsSharedInput";
import { UserUpdateWithoutTripsSharedInput } from "../inputs/UserUpdateWithoutTripsSharedInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpsertWithoutTripsSharedInput", {})
export class UserUpsertWithoutTripsSharedInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutTripsSharedInput, {
    nullable: false
  })
  update!: UserUpdateWithoutTripsSharedInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutTripsSharedInput, {
    nullable: false
  })
  create!: UserCreateWithoutTripsSharedInput;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;
}
