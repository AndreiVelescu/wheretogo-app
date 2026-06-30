import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutTripsSharedInput } from "../inputs/UserUpdateWithoutTripsSharedInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutTripsSharedInput", {})
export class UserUpdateToOneWithWhereWithoutTripsSharedInput {
  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutTripsSharedInput, {
    nullable: false
  })
  data!: UserUpdateWithoutTripsSharedInput;
}
