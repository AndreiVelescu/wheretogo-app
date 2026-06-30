import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutCommentLikesNestedInput } from "../inputs/UserUpdateOneRequiredWithoutCommentLikesNestedInput";

@TypeGraphQL.InputType("CommentLikeUpdateWithoutCommentInput", {})
export class CommentLikeUpdateWithoutCommentInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutCommentLikesNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutCommentLikesNestedInput | undefined;
}
