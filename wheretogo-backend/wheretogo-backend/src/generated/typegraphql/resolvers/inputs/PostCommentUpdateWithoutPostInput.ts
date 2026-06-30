import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentLikeUpdateManyWithoutCommentNestedInput } from "../inputs/CommentLikeUpdateManyWithoutCommentNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { PostCommentUpdateManyWithoutParentNestedInput } from "../inputs/PostCommentUpdateManyWithoutParentNestedInput";
import { PostCommentUpdateOneWithoutRepliesNestedInput } from "../inputs/PostCommentUpdateOneWithoutRepliesNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutPostCommentsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutPostCommentsNestedInput";

@TypeGraphQL.InputType("PostCommentUpdateWithoutPostInput", {})
export class PostCommentUpdateWithoutPostInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  content?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  likesCount?: IntFieldUpdateOperationsInput | undefined;

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
  editedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutPostCommentsNestedInput, {
    nullable: true
  })
  author?: UserUpdateOneRequiredWithoutPostCommentsNestedInput | undefined;

  @TypeGraphQL.Field(_type => PostCommentUpdateOneWithoutRepliesNestedInput, {
    nullable: true
  })
  parent?: PostCommentUpdateOneWithoutRepliesNestedInput | undefined;

  @TypeGraphQL.Field(_type => PostCommentUpdateManyWithoutParentNestedInput, {
    nullable: true
  })
  replies?: PostCommentUpdateManyWithoutParentNestedInput | undefined;

  @TypeGraphQL.Field(_type => CommentLikeUpdateManyWithoutCommentNestedInput, {
    nullable: true
  })
  likes?: CommentLikeUpdateManyWithoutCommentNestedInput | undefined;
}
