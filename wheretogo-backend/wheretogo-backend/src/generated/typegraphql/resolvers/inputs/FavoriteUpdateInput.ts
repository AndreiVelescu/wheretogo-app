import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { LocationUpdateOneRequiredWithoutFavoritesNestedInput } from "../inputs/LocationUpdateOneRequiredWithoutFavoritesNestedInput";
import { UserUpdateOneRequiredWithoutFavoritesNestedInput } from "../inputs/UserUpdateOneRequiredWithoutFavoritesNestedInput";

@TypeGraphQL.InputType("FavoriteUpdateInput", {})
export class FavoriteUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutFavoritesNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutFavoritesNestedInput | undefined;

  @TypeGraphQL.Field(_type => LocationUpdateOneRequiredWithoutFavoritesNestedInput, {
    nullable: true
  })
  location?: LocationUpdateOneRequiredWithoutFavoritesNestedInput | undefined;
}
