import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { PostUpdateOneRequiredWithoutLikesNestedInput } from "../inputs/PostUpdateOneRequiredWithoutLikesNestedInput";
import { UserUpdateOneRequiredWithoutPostLikesNestedInput } from "../inputs/UserUpdateOneRequiredWithoutPostLikesNestedInput";

@TypeGraphQL.InputType("PostLikeUpdateInput", {})
export class PostLikeUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutPostLikesNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutPostLikesNestedInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateOneRequiredWithoutLikesNestedInput, {
    nullable: true
  })
  post?: PostUpdateOneRequiredWithoutLikesNestedInput | undefined;
}
