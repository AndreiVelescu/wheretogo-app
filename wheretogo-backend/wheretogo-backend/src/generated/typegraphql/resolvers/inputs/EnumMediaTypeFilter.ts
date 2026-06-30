import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumMediaTypeFilter } from "../inputs/NestedEnumMediaTypeFilter";
import { MediaType } from "../../enums/MediaType";

@TypeGraphQL.InputType("EnumMediaTypeFilter", {})
export class EnumMediaTypeFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumMediaTypeFilter, {
    nullable: true
  })
  not?: NestedEnumMediaTypeFilter | undefined;
}
