import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TripStopUpdateInput } from "../../../inputs/TripStopUpdateInput";
import { TripStopWhereUniqueInput } from "../../../inputs/TripStopWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneTripStopArgs {
  @TypeGraphQL.Field(_type => TripStopUpdateInput, {
    nullable: false
  })
  data!: TripStopUpdateInput;

  @TypeGraphQL.Field(_type => TripStopWhereUniqueInput, {
    nullable: false
  })
  where!: TripStopWhereUniqueInput;
}
