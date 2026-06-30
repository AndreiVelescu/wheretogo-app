import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutScheduleLocationInCalendarsInput } from "../inputs/UserCreateOrConnectWithoutScheduleLocationInCalendarsInput";
import { UserCreateWithoutScheduleLocationInCalendarsInput } from "../inputs/UserCreateWithoutScheduleLocationInCalendarsInput";
import { UserUpdateToOneWithWhereWithoutScheduleLocationInCalendarsInput } from "../inputs/UserUpdateToOneWithWhereWithoutScheduleLocationInCalendarsInput";
import { UserUpsertWithoutScheduleLocationInCalendarsInput } from "../inputs/UserUpsertWithoutScheduleLocationInCalendarsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutScheduleLocationInCalendarsNestedInput", {})
export class UserUpdateOneRequiredWithoutScheduleLocationInCalendarsNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutScheduleLocationInCalendarsInput, {
    nullable: true
  })
  create?: UserCreateWithoutScheduleLocationInCalendarsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutScheduleLocationInCalendarsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutScheduleLocationInCalendarsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutScheduleLocationInCalendarsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutScheduleLocationInCalendarsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutScheduleLocationInCalendarsInput, {
    nullable: true
  })
  update?: UserUpdateToOneWithWhereWithoutScheduleLocationInCalendarsInput | undefined;
}
