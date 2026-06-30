import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TripStopUpdateManyMutationInput } from "../../../inputs/TripStopUpdateManyMutationInput";
import { TripStopWhereInput } from "../../../inputs/TripStopWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTripStopArgs {
  @TypeGraphQL.Field(_type => TripStopUpdateManyMutationInput, {
    nullable: false
  })
  data!: TripStopUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TripStopWhereInput, {
    nullable: true
  })
  where?: TripStopWhereInput | undefined;
}
