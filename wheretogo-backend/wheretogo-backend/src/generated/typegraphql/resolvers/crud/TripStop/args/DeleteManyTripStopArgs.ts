import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TripStopWhereInput } from "../../../inputs/TripStopWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTripStopArgs {
  @TypeGraphQL.Field(_type => TripStopWhereInput, {
    nullable: true
  })
  where?: TripStopWhereInput | undefined;
}
