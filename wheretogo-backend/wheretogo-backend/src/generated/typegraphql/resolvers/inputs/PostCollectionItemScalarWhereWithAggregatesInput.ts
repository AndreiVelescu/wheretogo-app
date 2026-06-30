import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("PostCollectionItemScalarWhereWithAggregatesInput", {})
export class PostCollectionItemScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PostCollectionItemScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PostCollectionItemScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCollectionItemScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PostCollectionItemScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCollectionItemScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PostCollectionItemScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  collectionId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  postId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  order?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  note?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  addedAt?: DateTimeWithAggregatesFilter | undefined;
}
