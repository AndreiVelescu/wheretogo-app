import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateNestedOneWithoutPostsInput } from "../inputs/LocationCreateNestedOneWithoutPostsInput";
import { PostCollectionItemCreateNestedManyWithoutPostInput } from "../inputs/PostCollectionItemCreateNestedManyWithoutPostInput";
import { PostCommentCreateNestedManyWithoutPostInput } from "../inputs/PostCommentCreateNestedManyWithoutPostInput";
import { PostCreatetagsInput } from "../inputs/PostCreatetagsInput";
import { PostLikeCreateNestedManyWithoutPostInput } from "../inputs/PostLikeCreateNestedManyWithoutPostInput";
import { PostMediaCreateNestedManyWithoutPostInput } from "../inputs/PostMediaCreateNestedManyWithoutPostInput";
import { PostMetricsCreateNestedOneWithoutPostInput } from "../inputs/PostMetricsCreateNestedOneWithoutPostInput";
import { PostReportCreateNestedManyWithoutPostInput } from "../inputs/PostReportCreateNestedManyWithoutPostInput";
import { PostShareCreateNestedManyWithoutPostInput } from "../inputs/PostShareCreateNestedManyWithoutPostInput";
import { SavedPostCreateNestedManyWithoutPostInput } from "../inputs/SavedPostCreateNestedManyWithoutPostInput";
import { TripCreateNestedOneWithoutPostsInput } from "../inputs/TripCreateNestedOneWithoutPostsInput";
import { PostType } from "../../enums/PostType";
import { PostVisibility } from "../../enums/PostVisibility";

@TypeGraphQL.InputType("PostCreateWithoutAuthorInput", {})
export class PostCreateWithoutAuthorInput {
  @TypeGraphQL.Field(_type => PostType, {
    nullable: false
  })
  type!: "EXPERIENCE" | "TIP" | "TRIP";

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => PostCreatetagsInput, {
    nullable: true
  })
  tags?: PostCreatetagsInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  likesCount?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  commentsCount?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  savedCount?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  sharesCount?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  viewsCount?: number | undefined;

  @TypeGraphQL.Field(_type => PostVisibility, {
    nullable: true
  })
  visibility?: "PUBLIC" | "FRIENDS" | "PRIVATE" | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  publishedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => LocationCreateNestedOneWithoutPostsInput, {
    nullable: true
  })
  location?: LocationCreateNestedOneWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => TripCreateNestedOneWithoutPostsInput, {
    nullable: true
  })
  trip?: TripCreateNestedOneWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => PostMediaCreateNestedManyWithoutPostInput, {
    nullable: true
  })
  media?: PostMediaCreateNestedManyWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => PostLikeCreateNestedManyWithoutPostInput, {
    nullable: true
  })
  likes?: PostLikeCreateNestedManyWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => PostCommentCreateNestedManyWithoutPostInput, {
    nullable: true
  })
  comments?: PostCommentCreateNestedManyWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => SavedPostCreateNestedManyWithoutPostInput, {
    nullable: true
  })
  saves?: SavedPostCreateNestedManyWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => PostShareCreateNestedManyWithoutPostInput, {
    nullable: true
  })
  shares?: PostShareCreateNestedManyWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => PostReportCreateNestedManyWithoutPostInput, {
    nullable: true
  })
  reports?: PostReportCreateNestedManyWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => PostCollectionItemCreateNestedManyWithoutPostInput, {
    nullable: true
  })
  collections?: PostCollectionItemCreateNestedManyWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => PostMetricsCreateNestedOneWithoutPostInput, {
    nullable: true
  })
  metrics?: PostMetricsCreateNestedOneWithoutPostInput | undefined;
}
