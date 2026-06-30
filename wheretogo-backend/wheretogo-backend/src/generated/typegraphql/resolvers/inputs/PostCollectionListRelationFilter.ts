import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCollectionWhereInput } from "../inputs/PostCollectionWhereInput";

@TypeGraphQL.InputType("PostCollectionListRelationFilter", {})
export class PostCollectionListRelationFilter {
  @TypeGraphQL.Field(_type => PostCollectionWhereInput, {
    nullable: true
  })
  every?: PostCollectionWhereInput | undefined;

  @TypeGraphQL.Field(_type => PostCollectionWhereInput, {
    nullable: true
  })
  some?: PostCollectionWhereInput | undefined;

  @TypeGraphQL.Field(_type => PostCollectionWhereInput, {
    nullable: true
  })
  none?: PostCollectionWhereInput | undefined;
}
