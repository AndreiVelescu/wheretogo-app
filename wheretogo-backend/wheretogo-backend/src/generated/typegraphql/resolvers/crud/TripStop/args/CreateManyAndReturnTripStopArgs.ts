import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TripStopCreateManyInput } from "../../../inputs/TripStopCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnTripStopArgs {
  @TypeGraphQL.Field(_type => [TripStopCreateManyInput], {
    nullable: false
  })
  data!: TripStopCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
