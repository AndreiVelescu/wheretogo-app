import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TripDayWhereUniqueInput } from "../../../inputs/TripDayWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueTripDayArgs {
  @TypeGraphQL.Field(_type => TripDayWhereUniqueInput, {
    nullable: false
  })
  where!: TripDayWhereUniqueInput;
}
