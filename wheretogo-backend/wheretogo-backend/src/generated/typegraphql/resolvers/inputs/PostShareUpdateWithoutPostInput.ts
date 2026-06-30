import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableEnumSharePlatformFieldUpdateOperationsInput } from "../inputs/NullableEnumSharePlatformFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutPostSharesNestedInput } from "../inputs/UserUpdateOneRequiredWithoutPostSharesNestedInput";

@TypeGraphQL.InputType("PostShareUpdateWithoutPostInput", {})
export class PostShareUpdateWithoutPostInput {
  @TypeGraphQL.Field(_type => NullableEnumSharePlatformFieldUpdateOperationsInput, {
    nullable: true
  })
  platform?: NullableEnumSharePlatformFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutPostSharesNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutPostSharesNestedInput | undefined;
}
