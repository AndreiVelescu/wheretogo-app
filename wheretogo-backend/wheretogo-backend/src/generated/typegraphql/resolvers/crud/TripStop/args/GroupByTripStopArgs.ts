import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TripStopOrderByWithAggregationInput } from "../../../inputs/TripStopOrderByWithAggregationInput";
import { TripStopScalarWhereWithAggregatesInput } from "../../../inputs/TripStopScalarWhereWithAggregatesInput";
import { TripStopWhereInput } from "../../../inputs/TripStopWhereInput";
import { TripStopScalarFieldEnum } from "../../../../enums/TripStopScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTripStopArgs {
  @TypeGraphQL.Field(_type => TripStopWhereInput, {
    nullable: true
  })
  where?: TripStopWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TripStopOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TripStopOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripStopScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "tripDayId" | "locationId" | "customName" | "address" | "lat" | "lng" | "order" | "arrivalTime" | "departureTime" | "transportMode" | "notes" | "estimatedCost" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => TripStopScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TripStopScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
