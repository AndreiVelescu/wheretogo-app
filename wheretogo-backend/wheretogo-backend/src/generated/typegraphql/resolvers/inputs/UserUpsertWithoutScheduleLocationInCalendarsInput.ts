import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutScheduleLocationInCalendarsInput } from "../inputs/UserCreateWithoutScheduleLocationInCalendarsInput";
import { UserUpdateWithoutScheduleLocationInCalendarsInput } from "../inputs/UserUpdateWithoutScheduleLocationInCalendarsInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpsertWithoutScheduleLocationInCalendarsInput", {})
export class UserUpsertWithoutScheduleLocationInCalendarsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutScheduleLocationInCalendarsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutScheduleLocationInCalendarsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutScheduleLocationInCalendarsInput, {
    nullable: false
  })
  create!: UserCreateWithoutScheduleLocationInCalendarsInput;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;
}
