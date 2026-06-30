import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TripDayOrderByWithAggregationInput } from "../../../inputs/TripDayOrderByWithAggregationInput";
import { TripDayScalarWhereWithAggregatesInput } from "../../../inputs/TripDayScalarWhereWithAggregatesInput";
import { TripDayWhereInput } from "../../../inputs/TripDayWhereInput";
import { TripDayScalarFieldEnum } from "../../../../enums/TripDayScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTripDayArgs {
  @TypeGraphQL.Field(_type => TripDayWhereInput, {
    nullable: true
  })
  where?: TripDayWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TripDayOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TripDayOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripDayScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "tripId" | "date" | "dayNumber" | "notes" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => TripDayScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TripDayScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
