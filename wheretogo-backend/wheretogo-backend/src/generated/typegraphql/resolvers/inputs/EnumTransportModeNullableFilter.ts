import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumTransportModeNullableFilter } from "../inputs/NestedEnumTransportModeNullableFilter";
import { TransportMode } from "../../enums/TransportMode";

@TypeGraphQL.InputType("EnumTransportModeNullableFilter", {})
export class EnumTransportModeNullableFilter {
  @TypeGraphQL.Field(_type => TransportMode, {
    nullable: true
  })
  equals?: "WALK" | "CAR" | "PUBLIC_TRANSPORT" | "BIKE" | "TAXI" | "OTHER" | undefined;

  @TypeGraphQL.Field(_type => [TransportMode], {
    nullable: true
  })
  in?: Array<"WALK" | "CAR" | "PUBLIC_TRANSPORT" | "BIKE" | "TAXI" | "OTHER"> | undefined;

  @TypeGraphQL.Field(_type => [TransportMode], {
    nullable: true
  })
  notIn?: Array<"WALK" | "CAR" | "PUBLIC_TRANSPORT" | "BIKE" | "TAXI" | "OTHER"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumTransportModeNullableFilter, {
    nullable: true
  })
  not?: NestedEnumTransportModeNullableFilter | undefined;
}
