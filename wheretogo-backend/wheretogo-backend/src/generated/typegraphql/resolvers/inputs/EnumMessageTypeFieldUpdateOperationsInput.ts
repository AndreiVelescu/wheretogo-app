import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageType } from "../../enums/MessageType";

@TypeGraphQL.InputType("EnumMessageTypeFieldUpdateOperationsInput", {})
export class EnumMessageTypeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => MessageType, {
    nullable: true
  })
  set?: "TEXT" | "IMAGE" | "LOCATION" | "FILE" | "SYSTEM" | undefined;
}
