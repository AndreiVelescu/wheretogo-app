import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TripDayUpdateInput } from "../../../inputs/TripDayUpdateInput";
import { TripDayWhereUniqueInput } from "../../../inputs/TripDayWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneTripDayArgs {
  @TypeGraphQL.Field(_type => TripDayUpdateInput, {
    nullable: false
  })
  data!: TripDayUpdateInput;

  @TypeGraphQL.Field(_type => TripDayWhereUniqueInput, {
    nullable: false
  })
  where!: TripDayWhereUniqueInput;
}
