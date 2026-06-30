import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PostCollectionRelationFilter } from "../inputs/PostCollectionRelationFilter";
import { PostRelationFilter } from "../inputs/PostRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("PostCollectionItemWhereInput", {})
export class PostCollectionItemWhereInput {
  @TypeGraphQL.Field(_type => [PostCollectionItemWhereInput], {
    nullable: true
  })
  AND?: PostCollectionItemWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCollectionItemWhereInput], {
    nullable: true
  })
  OR?: PostCollectionItemWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCollectionItemWhereInput], {
    nullable: true
  })
  NOT?: PostCollectionItemWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  collectionId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  postId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  order?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  note?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  addedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => PostCollectionRelationFilter, {
    nullable: true
  })
  collection?: PostCollectionRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PostRelationFilter, {
    nullable: true
  })
  post?: PostRelationFilter | undefined;
}
