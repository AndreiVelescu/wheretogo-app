import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutTripsOwnedInput } from "../inputs/UserCreateOrConnectWithoutTripsOwnedInput";
import { UserCreateWithoutTripsOwnedInput } from "../inputs/UserCreateWithoutTripsOwnedInput";
import { UserUpdateToOneWithWhereWithoutTripsOwnedInput } from "../inputs/UserUpdateToOneWithWhereWithoutTripsOwnedInput";
import { UserUpsertWithoutTripsOwnedInput } from "../inputs/UserUpsertWithoutTripsOwnedInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutTripsOwnedNestedInput", {})
export class UserUpdateOneRequiredWithoutTripsOwnedNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutTripsOwnedInput, {
    nullable: true
  })
  create?: UserCreateWithoutTripsOwnedInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutTripsOwnedInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutTripsOwnedInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutTripsOwnedInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutTripsOwnedInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutTripsOwnedInput, {
    nullable: true
  })
  update?: UserUpdateToOneWithWhereWithoutTripsOwnedInput | undefined;
}
