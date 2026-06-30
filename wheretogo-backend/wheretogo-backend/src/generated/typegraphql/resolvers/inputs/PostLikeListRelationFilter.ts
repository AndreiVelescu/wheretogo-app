import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostLikeWhereInput } from "../inputs/PostLikeWhereInput";

@TypeGraphQL.InputType("PostLikeListRelationFilter", {})
export class PostLikeListRelationFilter {
  @TypeGraphQL.Field(_type => PostLikeWhereInput, {
    nullable: true
  })
  every?: PostLikeWhereInput | undefined;

  @TypeGraphQL.Field(_type => PostLikeWhereInput, {
    nullable: true
  })
  some?: PostLikeWhereInput | undefined;

  @TypeGraphQL.Field(_type => PostLikeWhereInput, {
    nullable: true
  })
  none?: PostLikeWhereInput | undefined;
}
