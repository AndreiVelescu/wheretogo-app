import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("PostCollectionItemScalarWhereInput", {})
export class PostCollectionItemScalarWhereInput {
  @TypeGraphQL.Field(_type => [PostCollectionItemScalarWhereInput], {
    nullable: true
  })
  AND?: PostCollectionItemScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCollectionItemScalarWhereInput], {
    nullable: true
  })
  OR?: PostCollectionItemScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCollectionItemScalarWhereInput], {
    nullable: true
  })
  NOT?: PostCollectionItemScalarWhereInput[] | undefined;

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
}
