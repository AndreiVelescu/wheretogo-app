import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PostCollectionUpdateOneRequiredWithoutPostsNestedInput } from "../inputs/PostCollectionUpdateOneRequiredWithoutPostsNestedInput";

@TypeGraphQL.InputType("PostCollectionItemUpdateWithoutPostInput", {})
export class PostCollectionItemUpdateWithoutPostInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  order?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  note?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  addedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PostCollectionUpdateOneRequiredWithoutPostsNestedInput, {
    nullable: true
  })
  collection?: PostCollectionUpdateOneRequiredWithoutPostsNestedInput | undefined;
}
