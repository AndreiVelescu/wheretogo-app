import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventAvgOrderByAggregateInput } from "../inputs/EventAvgOrderByAggregateInput";
import { EventCountOrderByAggregateInput } from "../inputs/EventCountOrderByAggregateInput";
import { EventMaxOrderByAggregateInput } from "../inputs/EventMaxOrderByAggregateInput";
import { EventMinOrderByAggregateInput } from "../inputs/EventMinOrderByAggregateInput";
import { EventSumOrderByAggregateInput } from "../inputs/EventSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EventOrderByWithAggregationInput", {})
export class EventOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  locationId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  notify?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => EventCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: EventCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EventAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: EventAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EventMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: EventMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EventMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: EventMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EventSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: EventSumOrderByAggregateInput | undefined;
}
