import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCollectionItemAvgOrderByAggregateInput } from "../inputs/PostCollectionItemAvgOrderByAggregateInput";
import { PostCollectionItemCountOrderByAggregateInput } from "../inputs/PostCollectionItemCountOrderByAggregateInput";
import { PostCollectionItemMaxOrderByAggregateInput } from "../inputs/PostCollectionItemMaxOrderByAggregateInput";
import { PostCollectionItemMinOrderByAggregateInput } from "../inputs/PostCollectionItemMinOrderByAggregateInput";
import { PostCollectionItemSumOrderByAggregateInput } from "../inputs/PostCollectionItemSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PostCollectionItemOrderByWithAggregationInput", {})
export class PostCollectionItemOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  collectionId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  postId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  order?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  note?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  addedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PostCollectionItemCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PostCollectionItemCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostCollectionItemAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PostCollectionItemAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostCollectionItemMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PostCollectionItemMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostCollectionItemMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PostCollectionItemMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostCollectionItemSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PostCollectionItemSumOrderByAggregateInput | undefined;
}
