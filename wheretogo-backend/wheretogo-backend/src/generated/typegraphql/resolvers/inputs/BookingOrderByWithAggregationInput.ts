import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookingAvgOrderByAggregateInput } from "../inputs/BookingAvgOrderByAggregateInput";
import { BookingCountOrderByAggregateInput } from "../inputs/BookingCountOrderByAggregateInput";
import { BookingMaxOrderByAggregateInput } from "../inputs/BookingMaxOrderByAggregateInput";
import { BookingMinOrderByAggregateInput } from "../inputs/BookingMinOrderByAggregateInput";
import { BookingSumOrderByAggregateInput } from "../inputs/BookingSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("BookingOrderByWithAggregationInput", {})
export class BookingOrderByWithAggregationInput {
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
  locationId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  time?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  persons?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  affiliateUrl?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => BookingCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: BookingCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BookingAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: BookingAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BookingMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: BookingMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BookingMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: BookingMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BookingSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: BookingSumOrderByAggregateInput | undefined;
}
