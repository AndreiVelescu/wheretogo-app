import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumMediaTypeFilter } from "../inputs/NestedEnumMediaTypeFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { MediaType } from "../../enums/MediaType";

@TypeGraphQL.InputType("NestedEnumMediaTypeWithAggregatesFilter", {})
export class NestedEnumMediaTypeWithAggregatesFilter {
  @TypeGraphQL.Field(_type => MediaType, {
    nullable: true
  })
  equals?: "IMAGE" | "VIDEO" | "AUDIO" | undefined;

  @TypeGraphQL.Field(_type => [MediaType], {
    nullable: true
  })
  in?: Array<"IMAGE" | "VIDEO" | "AUDIO"> | undefined;

  @TypeGraphQL.Field(_type => [MediaType], {
    nullable: true
  })
  notIn?: Array<"IMAGE" | "VIDEO" | "AUDIO"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumMediaTypeWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumMediaTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumMediaTypeFilter, {
    nullable: true
  })
  _min?: NestedEnumMediaTypeFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumMediaTypeFilter, {
    nullable: true
  })
  _max?: NestedEnumMediaTypeFilter | undefined;
}
