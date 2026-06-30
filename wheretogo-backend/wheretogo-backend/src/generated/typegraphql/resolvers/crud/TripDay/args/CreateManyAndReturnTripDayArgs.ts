import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TripDayCreateManyInput } from "../../../inputs/TripDayCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnTripDayArgs {
  @TypeGraphQL.Field(_type => [TripDayCreateManyInput], {
    nullable: false
  })
  data!: TripDayCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
