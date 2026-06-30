import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TripDayOrderByWithRelationInput } from "../../../inputs/TripDayOrderByWithRelationInput";
import { TripDayWhereInput } from "../../../inputs/TripDayWhereInput";
import { TripDayWhereUniqueInput } from "../../../inputs/TripDayWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateTripDayArgs {
  @TypeGraphQL.Field(_type => TripDayWhereInput, {
    nullable: true
  })
  where?: TripDayWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TripDayOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TripDayOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TripDayWhereUniqueInput, {
    nullable: true
  })
  cursor?: TripDayWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
