import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutTripsOwnedInput } from "../inputs/UserUpdateWithoutTripsOwnedInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutTripsOwnedInput", {})
export class UserUpdateToOneWithWhereWithoutTripsOwnedInput {
  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutTripsOwnedInput, {
    nullable: false
  })
  data!: UserUpdateWithoutTripsOwnedInput;
}
