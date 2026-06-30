import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutScheduleLocationInCalendarsInput } from "../inputs/UserCreateOrConnectWithoutScheduleLocationInCalendarsInput";
import { UserCreateWithoutScheduleLocationInCalendarsInput } from "../inputs/UserCreateWithoutScheduleLocationInCalendarsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutScheduleLocationInCalendarsInput", {})
export class UserCreateNestedOneWithoutScheduleLocationInCalendarsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutScheduleLocationInCalendarsInput, {
    nullable: true
  })
  create?: UserCreateWithoutScheduleLocationInCalendarsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutScheduleLocationInCalendarsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutScheduleLocationInCalendarsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
