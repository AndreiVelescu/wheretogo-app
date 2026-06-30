import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SavedPostWhereInput } from "../inputs/SavedPostWhereInput";

@TypeGraphQL.InputType("SavedPostListRelationFilter", {})
export class SavedPostListRelationFilter {
  @TypeGraphQL.Field(_type => SavedPostWhereInput, {
    nullable: true
  })
  every?: SavedPostWhereInput | undefined;

  @TypeGraphQL.Field(_type => SavedPostWhereInput, {
    nullable: true
  })
  some?: SavedPostWhereInput | undefined;

  @TypeGraphQL.Field(_type => SavedPostWhereInput, {
    nullable: true
  })
  none?: SavedPostWhereInput | undefined;
}
