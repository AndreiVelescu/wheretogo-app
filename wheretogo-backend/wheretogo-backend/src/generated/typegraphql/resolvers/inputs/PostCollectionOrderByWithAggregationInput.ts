import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCollectionAvgOrderByAggregateInput } from "../inputs/PostCollectionAvgOrderByAggregateInput";
import { PostCollectionCountOrderByAggregateInput } from "../inputs/PostCollectionCountOrderByAggregateInput";
import { PostCollectionMaxOrderByAggregateInput } from "../inputs/PostCollectionMaxOrderByAggregateInput";
import { PostCollectionMinOrderByAggregateInput } from "../inputs/PostCollectionMinOrderByAggregateInput";
import { PostCollectionSumOrderByAggregateInput } from "../inputs/PostCollectionSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PostCollectionOrderByWithAggregationInput", {})
export class PostCollectionOrderByWithAggregationInput {
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
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  description?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  isPublic?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  coverImage?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PostCollectionCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PostCollectionCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostCollectionAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PostCollectionAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostCollectionMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PostCollectionMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostCollectionMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PostCollectionMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostCollectionSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PostCollectionSumOrderByAggregateInput | undefined;
}
