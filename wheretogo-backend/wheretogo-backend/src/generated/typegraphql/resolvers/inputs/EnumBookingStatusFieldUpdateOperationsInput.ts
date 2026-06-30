import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookingStatus } from "../../enums/BookingStatus";

@TypeGraphQL.InputType("EnumBookingStatusFieldUpdateOperationsInput", {})
export class EnumBookingStatusFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => BookingStatus, {
    nullable: true
  })
  set?: "PENDING" | "CONFIRMED" | "CANCELLED" | undefined;
}
