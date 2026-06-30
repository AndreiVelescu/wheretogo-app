import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { PostCommentUpdateOneRequiredWithoutLikesNestedInput } from "../inputs/PostCommentUpdateOneRequiredWithoutLikesNestedInput";
import { UserUpdateOneRequiredWithoutCommentLikesNestedInput } from "../inputs/UserUpdateOneRequiredWithoutCommentLikesNestedInput";

@TypeGraphQL.InputType("CommentLikeUpdateInput", {})
export class CommentLikeUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutCommentLikesNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutCommentLikesNestedInput | undefined;

  @TypeGraphQL.Field(_type => PostCommentUpdateOneRequiredWithoutLikesNestedInput, {
    nullable: true
  })
  comment?: PostCommentUpdateOneRequiredWithoutLikesNestedInput | undefined;
}
