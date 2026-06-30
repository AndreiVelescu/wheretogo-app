import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TripDayCreateInput } from "../../../inputs/TripDayCreateInput";
import { TripDayUpdateInput } from "../../../inputs/TripDayUpdateInput";
import { TripDayWhereUniqueInput } from "../../../inputs/TripDayWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneTripDayArgs {
  @TypeGraphQL.Field(_type => TripDayWhereUniqueInput, {
    nullable: false
  })
  where!: TripDayWhereUniqueInput;

  @TypeGraphQL.Field(_type => TripDayCreateInput, {
    nullable: false
  })
  create!: TripDayCreateInput;

  @TypeGraphQL.Field(_type => TripDayUpdateInput, {
    nullable: false
  })
  update!: TripDayUpdateInput;
}
