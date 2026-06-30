import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumPostVisibilityFilter } from "../inputs/NestedEnumPostVisibilityFilter";
import { NestedEnumPostVisibilityWithAggregatesFilter } from "../inputs/NestedEnumPostVisibilityWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { PostVisibility } from "../../enums/PostVisibility";

@TypeGraphQL.InputType("EnumPostVisibilityWithAggregatesFilter", {})
export class EnumPostVisibilityWithAggregatesFilter {
  @TypeGraphQL.Field(_type => PostVisibility, {
    nullable: true
  })
  equals?: "PUBLIC" | "FRIENDS" | "PRIVATE" | undefined;

  @TypeGraphQL.Field(_type => [PostVisibility], {
    nullable: true
  })
  in?: Array<"PUBLIC" | "FRIENDS" | "PRIVATE"> | undefined;

  @TypeGraphQL.Field(_type => [PostVisibility], {
    nullable: true
  })
  notIn?: Array<"PUBLIC" | "FRIENDS" | "PRIVATE"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumPostVisibilityWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumPostVisibilityWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumPostVisibilityFilter, {
    nullable: true
  })
  _min?: NestedEnumPostVisibilityFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumPostVisibilityFilter, {
    nullable: true
  })
  _max?: NestedEnumPostVisibilityFilter | undefined;
}
