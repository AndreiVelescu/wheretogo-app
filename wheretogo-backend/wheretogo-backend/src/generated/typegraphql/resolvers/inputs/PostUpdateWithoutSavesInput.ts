import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumPostTypeFieldUpdateOperationsInput } from "../inputs/EnumPostTypeFieldUpdateOperationsInput";
import { EnumPostVisibilityFieldUpdateOperationsInput } from "../inputs/EnumPostVisibilityFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { LocationUpdateOneWithoutPostsNestedInput } from "../inputs/LocationUpdateOneWithoutPostsNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PostCollectionItemUpdateManyWithoutPostNestedInput } from "../inputs/PostCollectionItemUpdateManyWithoutPostNestedInput";
import { PostCommentUpdateManyWithoutPostNestedInput } from "../inputs/PostCommentUpdateManyWithoutPostNestedInput";
import { PostLikeUpdateManyWithoutPostNestedInput } from "../inputs/PostLikeUpdateManyWithoutPostNestedInput";
import { PostMediaUpdateManyWithoutPostNestedInput } from "../inputs/PostMediaUpdateManyWithoutPostNestedInput";
import { PostMetricsUpdateOneWithoutPostNestedInput } from "../inputs/PostMetricsUpdateOneWithoutPostNestedInput";
import { PostReportUpdateManyWithoutPostNestedInput } from "../inputs/PostReportUpdateManyWithoutPostNestedInput";
import { PostShareUpdateManyWithoutPostNestedInput } from "../inputs/PostShareUpdateManyWithoutPostNestedInput";
import { PostUpdatetagsInput } from "../inputs/PostUpdatetagsInput";
import { TripUpdateOneWithoutPostsNestedInput } from "../inputs/TripUpdateOneWithoutPostsNestedInput";
import { UserUpdateOneRequiredWithoutPostsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutPostsNestedInput";

@TypeGraphQL.InputType("PostUpdateWithoutSavesInput", {})
export class PostUpdateWithoutSavesInput {
  @TypeGraphQL.Field(_type => EnumPostTypeFieldUpdateOperationsInput, {
    nullable: true
  })
  type?: EnumPostTypeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdatetagsInput, {
    nullable: true
  })
  tags?: PostUpdatetagsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  likesCount?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  commentsCount?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  savedCount?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  sharesCount?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  viewsCount?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumPostVisibilityFieldUpdateOperationsInput, {
    nullable: true
  })
  visibility?: EnumPostVisibilityFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  publishedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutPostsNestedInput, {
    nullable: true
  })
  author?: UserUpdateOneRequiredWithoutPostsNestedInput | undefined;

  @TypeGraphQL.Field(_type => LocationUpdateOneWithoutPostsNestedInput, {
    nullable: true
  })
  location?: LocationUpdateOneWithoutPostsNestedInput | undefined;

  @TypeGraphQL.Field(_type => TripUpdateOneWithoutPostsNestedInput, {
    nullable: true
  })
  trip?: TripUpdateOneWithoutPostsNestedInput | undefined;

  @TypeGraphQL.Field(_type => PostMediaUpdateManyWithoutPostNestedInput, {
    nullable: true
  })
  media?: PostMediaUpdateManyWithoutPostNestedInput | undefined;

  @TypeGraphQL.Field(_type => PostLikeUpdateManyWithoutPostNestedInput, {
    nullable: true
  })
  likes?: PostLikeUpdateManyWithoutPostNestedInput | undefined;

  @TypeGraphQL.Field(_type => PostCommentUpdateManyWithoutPostNestedInput, {
    nullable: true
  })
  comments?: PostCommentUpdateManyWithoutPostNestedInput | undefined;

  @TypeGraphQL.Field(_type => PostShareUpdateManyWithoutPostNestedInput, {
    nullable: true
  })
  shares?: PostShareUpdateManyWithoutPostNestedInput | undefined;

  @TypeGraphQL.Field(_type => PostReportUpdateManyWithoutPostNestedInput, {
    nullable: true
  })
  reports?: PostReportUpdateManyWithoutPostNestedInput | undefined;

  @TypeGraphQL.Field(_type => PostCollectionItemUpdateManyWithoutPostNestedInput, {
    nullable: true
  })
  collections?: PostCollectionItemUpdateManyWithoutPostNestedInput | undefined;

  @TypeGraphQL.Field(_type => PostMetricsUpdateOneWithoutPostNestedInput, {
    nullable: true
  })
  metrics?: PostMetricsUpdateOneWithoutPostNestedInput | undefined;
}
