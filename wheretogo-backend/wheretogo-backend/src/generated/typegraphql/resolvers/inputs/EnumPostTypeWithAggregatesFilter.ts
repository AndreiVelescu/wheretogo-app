import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumPostTypeFilter } from "../inputs/NestedEnumPostTypeFilter";
import { NestedEnumPostTypeWithAggregatesFilter } from "../inputs/NestedEnumPostTypeWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { PostType } from "../../enums/PostType";

@TypeGraphQL.InputType("EnumPostTypeWithAggregatesFilter", {})
export class EnumPostTypeWithAggregatesFilter {
  @TypeGraphQL.Field(_type => PostType, {
    nullable: true
  })
  equals?: "EXPERIENCE" | "TIP" | "TRIP" | undefined;

  @TypeGraphQL.Field(_type => [PostType], {
    nullable: true
  })
  in?: Array<"EXPERIENCE" | "TIP" | "TRIP"> | undefined;

  @TypeGraphQL.Field(_type => [PostType], {
    nullable: true
  })
  notIn?: Array<"EXPERIENCE" | "TIP" | "TRIP"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumPostTypeWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumPostTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumPostTypeFilter, {
    nullable: true
  })
  _min?: NestedEnumPostTypeFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumPostTypeFilter, {
    nullable: true
  })
  _max?: NestedEnumPostTypeFilter | undefined;
}
