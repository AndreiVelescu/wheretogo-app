import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumTransportModeNullableFilter } from "../inputs/NestedEnumTransportModeNullableFilter";
import { NestedEnumTransportModeNullableWithAggregatesFilter } from "../inputs/NestedEnumTransportModeNullableWithAggregatesFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
import { TransportMode } from "../../enums/TransportMode";

@TypeGraphQL.InputType("EnumTransportModeNullableWithAggregatesFilter", {})
export class EnumTransportModeNullableWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumTransportModeNullableWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumTransportModeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntNullableFilter, {
    nullable: true
  })
  _count?: NestedIntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumTransportModeNullableFilter, {
    nullable: true
  })
  _min?: NestedEnumTransportModeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumTransportModeNullableFilter, {
    nullable: true
  })
  _max?: NestedEnumTransportModeNullableFilter | undefined;
}
