import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RefreshTokenAvgOrderByAggregateInput } from "../inputs/RefreshTokenAvgOrderByAggregateInput";
import { RefreshTokenCountOrderByAggregateInput } from "../inputs/RefreshTokenCountOrderByAggregateInput";
import { RefreshTokenMaxOrderByAggregateInput } from "../inputs/RefreshTokenMaxOrderByAggregateInput";
import { RefreshTokenMinOrderByAggregateInput } from "../inputs/RefreshTokenMinOrderByAggregateInput";
import { RefreshTokenSumOrderByAggregateInput } from "../inputs/RefreshTokenSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("RefreshTokenOrderByWithAggregationInput", {})
export class RefreshTokenOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  token?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  expiresAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => RefreshTokenCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: RefreshTokenCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RefreshTokenAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: RefreshTokenAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RefreshTokenMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: RefreshTokenMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RefreshTokenMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: RefreshTokenMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RefreshTokenSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: RefreshTokenSumOrderByAggregateInput | undefined;
}
