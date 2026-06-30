import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { TripAvgOrderByAggregateInput } from "../inputs/TripAvgOrderByAggregateInput";
import { TripCountOrderByAggregateInput } from "../inputs/TripCountOrderByAggregateInput";
import { TripMaxOrderByAggregateInput } from "../inputs/TripMaxOrderByAggregateInput";
import { TripMinOrderByAggregateInput } from "../inputs/TripMinOrderByAggregateInput";
import { TripSumOrderByAggregateInput } from "../inputs/TripSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TripOrderByWithAggregationInput", {})
export class TripOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ownerId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  description?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  startDate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  endDate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  city?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  country?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  isPublic?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  totalBudget?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  currency?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TripCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TripCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TripAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: TripAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TripMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TripMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TripMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TripMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TripSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: TripSumOrderByAggregateInput | undefined;
}
