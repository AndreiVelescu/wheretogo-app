import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { LocationUpdateOneRequiredWithoutReviewsNestedInput } from "../inputs/LocationUpdateOneRequiredWithoutReviewsNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutReviewsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutReviewsNestedInput";

@TypeGraphQL.InputType("ReviewUpdateInput", {})
export class ReviewUpdateInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  rating?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  comment?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  likes?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutReviewsNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutReviewsNestedInput | undefined;

  @TypeGraphQL.Field(_type => LocationUpdateOneRequiredWithoutReviewsNestedInput, {
    nullable: true
  })
  location?: LocationUpdateOneRequiredWithoutReviewsNestedInput | undefined;
}
