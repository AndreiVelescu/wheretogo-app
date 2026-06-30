import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ScheduleLocationInCalendarUpdateManyMutationInput } from "../../../inputs/ScheduleLocationInCalendarUpdateManyMutationInput";
import { ScheduleLocationInCalendarWhereInput } from "../../../inputs/ScheduleLocationInCalendarWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyScheduleLocationInCalendarArgs {
  @TypeGraphQL.Field(_type => ScheduleLocationInCalendarUpdateManyMutationInput, {
    nullable: false
  })
  data!: ScheduleLocationInCalendarUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ScheduleLocationInCalendarWhereInput, {
    nullable: true
  })
  where?: ScheduleLocationInCalendarWhereInput | undefined;
}
