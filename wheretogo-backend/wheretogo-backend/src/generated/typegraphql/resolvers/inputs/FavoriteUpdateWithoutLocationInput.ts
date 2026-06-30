import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutFavoritesNestedInput } from "../inputs/UserUpdateOneRequiredWithoutFavoritesNestedInput";

@TypeGraphQL.InputType("FavoriteUpdateWithoutLocationInput", {})
export class FavoriteUpdateWithoutLocationInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutFavoritesNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutFavoritesNestedInput | undefined;
}
