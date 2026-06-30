import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutPostLikesNestedInput } from "../inputs/UserUpdateOneRequiredWithoutPostLikesNestedInput";

@TypeGraphQL.InputType("PostLikeUpdateWithoutPostInput", {})
export class PostLikeUpdateWithoutPostInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutPostLikesNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutPostLikesNestedInput | undefined;
}
