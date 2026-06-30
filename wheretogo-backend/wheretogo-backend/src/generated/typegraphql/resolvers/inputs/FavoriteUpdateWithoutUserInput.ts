import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { LocationUpdateOneRequiredWithoutFavoritesNestedInput } from "../inputs/LocationUpdateOneRequiredWithoutFavoritesNestedInput";

@TypeGraphQL.InputType("FavoriteUpdateWithoutUserInput", {})
export class FavoriteUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => LocationUpdateOneRequiredWithoutFavoritesNestedInput, {
    nullable: true
  })
  location?: LocationUpdateOneRequiredWithoutFavoritesNestedInput | undefined;
}
