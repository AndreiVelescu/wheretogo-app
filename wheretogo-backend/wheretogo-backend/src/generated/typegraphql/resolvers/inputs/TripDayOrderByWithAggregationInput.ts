import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { TripDayAvgOrderByAggregateInput } from "../inputs/TripDayAvgOrderByAggregateInput";
import { TripDayCountOrderByAggregateInput } from "../inputs/TripDayCountOrderByAggregateInput";
import { TripDayMaxOrderByAggregateInput } from "../inputs/TripDayMaxOrderByAggregateInput";
import { TripDayMinOrderByAggregateInput } from "../inputs/TripDayMinOrderByAggregateInput";
import { TripDaySumOrderByAggregateInput } from "../inputs/TripDaySumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TripDayOrderByWithAggregationInput", {})
export class TripDayOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tripId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  dayNumber?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  notes?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TripDayCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TripDayCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TripDayAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: TripDayAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TripDayMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TripDayMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TripDayMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TripDayMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TripDaySumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: TripDaySumOrderByAggregateInput | undefined;
}
