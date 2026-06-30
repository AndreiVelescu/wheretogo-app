import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCollectionWhereInput } from "../inputs/PostCollectionWhereInput";

@TypeGraphQL.InputType("PostCollectionRelationFilter", {})
export class PostCollectionRelationFilter {
  @TypeGraphQL.Field(_type => PostCollectionWhereInput, {
    nullable: true
  })
  is?: PostCollectionWhereInput | undefined;

  @TypeGraphQL.Field(_type => PostCollectionWhereInput, {
    nullable: true
  })
  isNot?: PostCollectionWhereInput | undefined;
}
