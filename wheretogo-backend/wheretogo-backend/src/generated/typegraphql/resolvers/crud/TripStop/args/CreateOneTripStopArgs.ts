import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TripStopCreateInput } from "../../../inputs/TripStopCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneTripStopArgs {
  @TypeGraphQL.Field(_type => TripStopCreateInput, {
    nullable: false
  })
  data!: TripStopCreateInput;
}
