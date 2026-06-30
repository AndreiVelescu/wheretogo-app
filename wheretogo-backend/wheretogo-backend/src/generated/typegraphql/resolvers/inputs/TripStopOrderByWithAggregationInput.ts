import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { TripStopAvgOrderByAggregateInput } from "../inputs/TripStopAvgOrderByAggregateInput";
import { TripStopCountOrderByAggregateInput } from "../inputs/TripStopCountOrderByAggregateInput";
import { TripStopMaxOrderByAggregateInput } from "../inputs/TripStopMaxOrderByAggregateInput";
import { TripStopMinOrderByAggregateInput } from "../inputs/TripStopMinOrderByAggregateInput";
import { TripStopSumOrderByAggregateInput } from "../inputs/TripStopSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TripStopOrderByWithAggregationInput", {})
export class TripStopOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tripDayId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  locationId?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  customName?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  address?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  lat?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  lng?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  order?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  arrivalTime?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  departureTime?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  transportMode?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  notes?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  estimatedCost?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TripStopCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TripStopCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TripStopAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: TripStopAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TripStopMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TripStopMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TripStopMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TripStopMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TripStopSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: TripStopSumOrderByAggregateInput | undefined;
}
