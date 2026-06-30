import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EnumPostTypeFilter } from "../inputs/EnumPostTypeFilter";
import { EnumPostVisibilityFilter } from "../inputs/EnumPostVisibilityFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { LocationNullableRelationFilter } from "../inputs/LocationNullableRelationFilter";
import { PostCollectionItemListRelationFilter } from "../inputs/PostCollectionItemListRelationFilter";
import { PostCommentListRelationFilter } from "../inputs/PostCommentListRelationFilter";
import { PostLikeListRelationFilter } from "../inputs/PostLikeListRelationFilter";
import { PostMediaListRelationFilter } from "../inputs/PostMediaListRelationFilter";
import { PostMetricsNullableRelationFilter } from "../inputs/PostMetricsNullableRelationFilter";
import { PostReportListRelationFilter } from "../inputs/PostReportListRelationFilter";
import { PostShareListRelationFilter } from "../inputs/PostShareListRelationFilter";
import { SavedPostListRelationFilter } from "../inputs/SavedPostListRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
import { TripNullableRelationFilter } from "../inputs/TripNullableRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("PostWhereInput", {})
export class PostWhereInput {
  @TypeGraphQL.Field(_type => [PostWhereInput], {
    nullable: true
  })
  AND?: PostWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereInput], {
    nullable: true
  })
  OR?: PostWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereInput], {
    nullable: true
  })
  NOT?: PostWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  authorId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => EnumPostTypeFilter, {
    nullable: true
  })
  type?: EnumPostTypeFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  title?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableListFilter, {
    nullable: true
  })
  tags?: StringNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  likesCount?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  commentsCount?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  savedCount?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  sharesCount?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  viewsCount?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => EnumPostVisibilityFilter, {
    nullable: true
  })
  visibility?: EnumPostVisibilityFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  locationId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  tripId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  publishedAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  author?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => LocationNullableRelationFilter, {
    nullable: true
  })
  location?: LocationNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TripNullableRelationFilter, {
    nullable: true
  })
  trip?: TripNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PostMediaListRelationFilter, {
    nullable: true
  })
  media?: PostMediaListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PostLikeListRelationFilter, {
    nullable: true
  })
  likes?: PostLikeListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PostCommentListRelationFilter, {
    nullable: true
  })
  comments?: PostCommentListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SavedPostListRelationFilter, {
    nullable: true
  })
  saves?: SavedPostListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PostShareListRelationFilter, {
    nullable: true
  })
  shares?: PostShareListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PostReportListRelationFilter, {
    nullable: true
  })
  reports?: PostReportListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PostCollectionItemListRelationFilter, {
    nullable: true
  })
  collections?: PostCollectionItemListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PostMetricsNullableRelationFilter, {
    nullable: true
  })
  metrics?: PostMetricsNullableRelationFilter | undefined;
}
