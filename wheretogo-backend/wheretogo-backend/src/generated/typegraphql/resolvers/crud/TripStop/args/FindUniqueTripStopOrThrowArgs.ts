import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TripStopWhereUniqueInput } from "../../../inputs/TripStopWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueTripStopOrThrowArgs {
  @TypeGraphQL.Field(_type => TripStopWhereUniqueInput, {
    nullable: false
  })
  where!: TripStopWhereUniqueInput;
}
