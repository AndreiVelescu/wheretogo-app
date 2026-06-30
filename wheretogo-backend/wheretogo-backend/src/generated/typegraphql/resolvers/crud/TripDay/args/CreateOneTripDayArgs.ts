import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TripDayCreateInput } from "../../../inputs/TripDayCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneTripDayArgs {
  @TypeGraphQL.Field(_type => TripDayCreateInput, {
    nullable: false
  })
  data!: TripDayCreateInput;
}
