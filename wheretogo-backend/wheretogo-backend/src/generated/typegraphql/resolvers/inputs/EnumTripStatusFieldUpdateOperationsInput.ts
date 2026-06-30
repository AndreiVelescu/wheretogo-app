import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripStatus } from "../../enums/TripStatus";

@TypeGraphQL.InputType("EnumTripStatusFieldUpdateOperationsInput", {})
export class EnumTripStatusFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => TripStatus, {
    nullable: true
  })
  set?: "DRAFT" | "PLANNED" | "ACTIVE" | "COMPLETED" | "CANCELLED" | undefined;
}
