import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostShareAvgOrderByAggregateInput } from "../inputs/PostShareAvgOrderByAggregateInput";
import { PostShareCountOrderByAggregateInput } from "../inputs/PostShareCountOrderByAggregateInput";
import { PostShareMaxOrderByAggregateInput } from "../inputs/PostShareMaxOrderByAggregateInput";
import { PostShareMinOrderByAggregateInput } from "../inputs/PostShareMinOrderByAggregateInput";
import { PostShareSumOrderByAggregateInput } from "../inputs/PostShareSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PostShareOrderByWithAggregationInput", {})
export class PostShareOrderByWithAggregationInput {
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
  platform?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PostShareCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PostShareCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostShareAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PostShareAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostShareMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PostShareMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostShareMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PostShareMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostShareSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PostShareSumOrderByAggregateInput | undefined;
}
