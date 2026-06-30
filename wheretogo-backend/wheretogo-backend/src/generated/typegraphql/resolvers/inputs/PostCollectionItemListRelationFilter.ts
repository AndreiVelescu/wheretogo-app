import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCollectionItemWhereInput } from "../inputs/PostCollectionItemWhereInput";

@TypeGraphQL.InputType("PostCollectionItemListRelationFilter", {})
export class PostCollectionItemListRelationFilter {
  @TypeGraphQL.Field(_type => PostCollectionItemWhereInput, {
    nullable: true
  })
  every?: PostCollectionItemWhereInput | undefined;

  @TypeGraphQL.Field(_type => PostCollectionItemWhereInput, {
    nullable: true
  })
  some?: PostCollectionItemWhereInput | undefined;

  @TypeGraphQL.Field(_type => PostCollectionItemWhereInput, {
    nullable: true
  })
  none?: PostCollectionItemWhereInput | undefined;
}
