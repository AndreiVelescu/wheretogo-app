import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TripDayUpdateManyMutationInput } from "../../../inputs/TripDayUpdateManyMutationInput";
import { TripDayWhereInput } from "../../../inputs/TripDayWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTripDayArgs {
  @TypeGraphQL.Field(_type => TripDayUpdateManyMutationInput, {
    nullable: false
  })
  data!: TripDayUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TripDayWhereInput, {
    nullable: true
  })
  where?: TripDayWhereInput | undefined;
}
