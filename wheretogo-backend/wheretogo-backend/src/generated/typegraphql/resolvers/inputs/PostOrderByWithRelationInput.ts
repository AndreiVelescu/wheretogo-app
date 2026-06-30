import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationOrderByWithRelationInput } from "../inputs/LocationOrderByWithRelationInput";
import { PostCollectionItemOrderByRelationAggregateInput } from "../inputs/PostCollectionItemOrderByRelationAggregateInput";
import { PostCommentOrderByRelationAggregateInput } from "../inputs/PostCommentOrderByRelationAggregateInput";
import { PostLikeOrderByRelationAggregateInput } from "../inputs/PostLikeOrderByRelationAggregateInput";
import { PostMediaOrderByRelationAggregateInput } from "../inputs/PostMediaOrderByRelationAggregateInput";
import { PostMetricsOrderByWithRelationInput } from "../inputs/PostMetricsOrderByWithRelationInput";
import { PostReportOrderByRelationAggregateInput } from "../inputs/PostReportOrderByRelationAggregateInput";
import { PostShareOrderByRelationAggregateInput } from "../inputs/PostShareOrderByRelationAggregateInput";
import { SavedPostOrderByRelationAggregateInput } from "../inputs/SavedPostOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { TripOrderByWithRelationInput } from "../inputs/TripOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PostOrderByWithRelationInput", {})
export class PostOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  authorId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  title?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  description?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tags?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  likesCount?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  commentsCount?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  savedCount?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  sharesCount?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  viewsCount?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  visibility?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  locationId?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  tripId?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  publishedAt?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => UserOrderByWithRelationInput, {
    nullable: true
  })
  author?: UserOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => LocationOrderByWithRelationInput, {
    nullable: true
  })
  location?: LocationOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => TripOrderByWithRelationInput, {
    nullable: true
  })
  trip?: TripOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => PostMediaOrderByRelationAggregateInput, {
    nullable: true
  })
  media?: PostMediaOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostLikeOrderByRelationAggregateInput, {
    nullable: true
  })
  likes?: PostLikeOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostCommentOrderByRelationAggregateInput, {
    nullable: true
  })
  comments?: PostCommentOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SavedPostOrderByRelationAggregateInput, {
    nullable: true
  })
  saves?: SavedPostOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostShareOrderByRelationAggregateInput, {
    nullable: true
  })
  shares?: PostShareOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostReportOrderByRelationAggregateInput, {
    nullable: true
  })
  reports?: PostReportOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostCollectionItemOrderByRelationAggregateInput, {
    nullable: true
  })
  collections?: PostCollectionItemOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostMetricsOrderByWithRelationInput, {
    nullable: true
  })
  metrics?: PostMetricsOrderByWithRelationInput | undefined;
}
