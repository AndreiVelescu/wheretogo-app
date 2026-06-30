import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceTokenAvgOrderByAggregateInput } from "../inputs/DeviceTokenAvgOrderByAggregateInput";
import { DeviceTokenCountOrderByAggregateInput } from "../inputs/DeviceTokenCountOrderByAggregateInput";
import { DeviceTokenMaxOrderByAggregateInput } from "../inputs/DeviceTokenMaxOrderByAggregateInput";
import { DeviceTokenMinOrderByAggregateInput } from "../inputs/DeviceTokenMinOrderByAggregateInput";
import { DeviceTokenSumOrderByAggregateInput } from "../inputs/DeviceTokenSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("DeviceTokenOrderByWithAggregationInput", {})
export class DeviceTokenOrderByWithAggregationInput {
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
  token?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  platform?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  isActive?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => DeviceTokenCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: DeviceTokenCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DeviceTokenAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: DeviceTokenAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DeviceTokenMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: DeviceTokenMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DeviceTokenMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: DeviceTokenMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DeviceTokenSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: DeviceTokenSumOrderByAggregateInput | undefined;
}
