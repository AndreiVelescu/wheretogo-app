import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableEnumSharePlatformFieldUpdateOperationsInput } from "../inputs/NullableEnumSharePlatformFieldUpdateOperationsInput";

@TypeGraphQL.InputType("PostShareUpdateManyMutationInput", {})
export class PostShareUpdateManyMutationInput {
  @TypeGraphQL.Field(_type => NullableEnumSharePlatformFieldUpdateOperationsInput, {
    nullable: true
  })
  platform?: NullableEnumSharePlatformFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
