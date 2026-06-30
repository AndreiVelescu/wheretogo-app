import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("FavoriteScalarWhereWithAggregatesInput", {})
export class FavoriteScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [FavoriteScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: FavoriteScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavoriteScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: FavoriteScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavoriteScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: FavoriteScalarWhereWithAggregatesInput[] | undefined;

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
  locationId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;
}
