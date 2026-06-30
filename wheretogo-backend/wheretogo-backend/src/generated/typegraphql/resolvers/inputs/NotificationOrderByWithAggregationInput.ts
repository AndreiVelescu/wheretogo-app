import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationAvgOrderByAggregateInput } from "../inputs/NotificationAvgOrderByAggregateInput";
import { NotificationCountOrderByAggregateInput } from "../inputs/NotificationCountOrderByAggregateInput";
import { NotificationMaxOrderByAggregateInput } from "../inputs/NotificationMaxOrderByAggregateInput";
import { NotificationMinOrderByAggregateInput } from "../inputs/NotificationMinOrderByAggregateInput";
import { NotificationSumOrderByAggregateInput } from "../inputs/NotificationSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("NotificationOrderByWithAggregationInput", {})
export class NotificationOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  body?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  data?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  isRead?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  locationId?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  eventId?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  tripId?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => NotificationCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: NotificationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NotificationAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: NotificationAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NotificationMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: NotificationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NotificationMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: NotificationMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NotificationSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: NotificationSumOrderByAggregateInput | undefined;
}
