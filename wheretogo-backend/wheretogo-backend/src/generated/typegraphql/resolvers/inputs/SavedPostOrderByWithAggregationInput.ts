import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SavedPostAvgOrderByAggregateInput } from "../inputs/SavedPostAvgOrderByAggregateInput";
import { SavedPostCountOrderByAggregateInput } from "../inputs/SavedPostCountOrderByAggregateInput";
import { SavedPostMaxOrderByAggregateInput } from "../inputs/SavedPostMaxOrderByAggregateInput";
import { SavedPostMinOrderByAggregateInput } from "../inputs/SavedPostMinOrderByAggregateInput";
import { SavedPostSumOrderByAggregateInput } from "../inputs/SavedPostSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SavedPostOrderByWithAggregationInput", {})
export class SavedPostOrderByWithAggregationInput {
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
  postId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  note?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SavedPostCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SavedPostCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SavedPostAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: SavedPostAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SavedPostMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SavedPostMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SavedPostMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SavedPostMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SavedPostSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: SavedPostSumOrderByAggregateInput | undefined;
}
