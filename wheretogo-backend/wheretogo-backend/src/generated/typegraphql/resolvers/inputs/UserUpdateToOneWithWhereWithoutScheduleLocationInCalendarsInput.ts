import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutScheduleLocationInCalendarsInput } from "../inputs/UserUpdateWithoutScheduleLocationInCalendarsInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutScheduleLocationInCalendarsInput", {})
export class UserUpdateToOneWithWhereWithoutScheduleLocationInCalendarsInput {
  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutScheduleLocationInCalendarsInput, {
    nullable: false
  })
  data!: UserUpdateWithoutScheduleLocationInCalendarsInput;
}
