import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutScheduleLocationInCalendarsInput } from "../inputs/UserCreateWithoutScheduleLocationInCalendarsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutScheduleLocationInCalendarsInput", {})
export class UserCreateOrConnectWithoutScheduleLocationInCalendarsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutScheduleLocationInCalendarsInput, {
    nullable: false
  })
  create!: UserCreateWithoutScheduleLocationInCalendarsInput;
}
