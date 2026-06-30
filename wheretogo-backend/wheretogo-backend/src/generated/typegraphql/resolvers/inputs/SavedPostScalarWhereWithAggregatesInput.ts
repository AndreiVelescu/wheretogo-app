import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("SavedPostScalarWhereWithAggregatesInput", {})
export class SavedPostScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [SavedPostScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: SavedPostScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SavedPostScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: SavedPostScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SavedPostScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: SavedPostScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  userId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  postId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  note?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;
}
