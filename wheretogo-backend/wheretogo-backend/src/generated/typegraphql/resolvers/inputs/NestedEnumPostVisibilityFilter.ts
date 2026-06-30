import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostVisibility } from "../../enums/PostVisibility";

@TypeGraphQL.InputType("NestedEnumPostVisibilityFilter", {})
export class NestedEnumPostVisibilityFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumPostVisibilityFilter, {
    nullable: true
  })
  not?: NestedEnumPostVisibilityFilter | undefined;
}
