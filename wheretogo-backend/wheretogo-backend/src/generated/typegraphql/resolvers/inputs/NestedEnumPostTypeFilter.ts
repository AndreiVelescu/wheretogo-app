import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostType } from "../../enums/PostType";

@TypeGraphQL.InputType("NestedEnumPostTypeFilter", {})
export class NestedEnumPostTypeFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumPostTypeFilter, {
    nullable: true
  })
  not?: NestedEnumPostTypeFilter | undefined;
}
