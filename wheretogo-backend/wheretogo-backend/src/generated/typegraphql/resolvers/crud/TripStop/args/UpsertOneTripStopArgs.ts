import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TripStopCreateInput } from "../../../inputs/TripStopCreateInput";
import { TripStopUpdateInput } from "../../../inputs/TripStopUpdateInput";
import { TripStopWhereUniqueInput } from "../../../inputs/TripStopWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneTripStopArgs {
  @TypeGraphQL.Field(_type => TripStopWhereUniqueInput, {
    nullable: false
  })
  where!: TripStopWhereUniqueInput;

  @TypeGraphQL.Field(_type => TripStopCreateInput, {
    nullable: false
  })
  create!: TripStopCreateInput;

  @TypeGraphQL.Field(_type => TripStopUpdateInput, {
    nullable: false
  })
  update!: TripStopUpdateInput;
}
