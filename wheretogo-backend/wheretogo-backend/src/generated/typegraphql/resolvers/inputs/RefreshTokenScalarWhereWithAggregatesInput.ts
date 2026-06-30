import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("RefreshTokenScalarWhereWithAggregatesInput", {})
export class RefreshTokenScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [RefreshTokenScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: RefreshTokenScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [RefreshTokenScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: RefreshTokenScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [RefreshTokenScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: RefreshTokenScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  token?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  userId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  expiresAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;
}
