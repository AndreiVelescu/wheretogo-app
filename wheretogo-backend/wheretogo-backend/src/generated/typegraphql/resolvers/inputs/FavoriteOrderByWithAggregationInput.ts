import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FavoriteAvgOrderByAggregateInput } from "../inputs/FavoriteAvgOrderByAggregateInput";
import { FavoriteCountOrderByAggregateInput } from "../inputs/FavoriteCountOrderByAggregateInput";
import { FavoriteMaxOrderByAggregateInput } from "../inputs/FavoriteMaxOrderByAggregateInput";
import { FavoriteMinOrderByAggregateInput } from "../inputs/FavoriteMinOrderByAggregateInput";
import { FavoriteSumOrderByAggregateInput } from "../inputs/FavoriteSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("FavoriteOrderByWithAggregationInput", {})
export class FavoriteOrderByWithAggregationInput {
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
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => FavoriteCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: FavoriteCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FavoriteAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: FavoriteAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FavoriteMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: FavoriteMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FavoriteMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: FavoriteMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FavoriteSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: FavoriteSumOrderByAggregateInput | undefined;
}
