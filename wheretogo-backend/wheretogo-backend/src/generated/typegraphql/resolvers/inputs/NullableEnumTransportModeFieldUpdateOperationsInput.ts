import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TransportMode } from "../../enums/TransportMode";

@TypeGraphQL.InputType("NullableEnumTransportModeFieldUpdateOperationsInput", {})
export class NullableEnumTransportModeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => TransportMode, {
    nullable: true
  })
  set?: "WALK" | "CAR" | "PUBLIC_TRANSPORT" | "BIKE" | "TAXI" | "OTHER" | undefined;
}
