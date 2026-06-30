import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostMediaWhereInput } from "../inputs/PostMediaWhereInput";

@TypeGraphQL.InputType("PostMediaListRelationFilter", {})
export class PostMediaListRelationFilter {
  @TypeGraphQL.Field(_type => PostMediaWhereInput, {
    nullable: true
  })
  every?: PostMediaWhereInput | undefined;

  @TypeGraphQL.Field(_type => PostMediaWhereInput, {
    nullable: true
  })
  some?: PostMediaWhereInput | undefined;

  @TypeGraphQL.Field(_type => PostMediaWhereInput, {
    nullable: true
  })
  none?: PostMediaWhereInput | undefined;
}
