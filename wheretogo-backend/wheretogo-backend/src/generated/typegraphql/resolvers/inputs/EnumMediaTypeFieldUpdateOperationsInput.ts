import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaType } from "../../enums/MediaType";

@TypeGraphQL.InputType("EnumMediaTypeFieldUpdateOperationsInput", {})
export class EnumMediaTypeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => MediaType, {
    nullable: true
  })
  set?: "IMAGE" | "VIDEO" | "AUDIO" | undefined;
}
