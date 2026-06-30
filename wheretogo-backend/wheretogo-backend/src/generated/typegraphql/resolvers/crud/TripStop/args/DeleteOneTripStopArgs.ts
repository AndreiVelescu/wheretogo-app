import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TripStopWhereUniqueInput } from "../../../inputs/TripStopWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneTripStopArgs {
  @TypeGraphQL.Field(_type => TripStopWhereUniqueInput, {
    nullable: false
  })
  where!: TripStopWhereUniqueInput;
}
