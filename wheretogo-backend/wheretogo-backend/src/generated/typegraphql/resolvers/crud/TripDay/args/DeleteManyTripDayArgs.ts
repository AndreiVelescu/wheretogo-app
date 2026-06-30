import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TripDayWhereInput } from "../../../inputs/TripDayWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTripDayArgs {
  @TypeGraphQL.Field(_type => TripDayWhereInput, {
    nullable: true
  })
  where?: TripDayWhereInput | undefined;
}
