import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("PostLikeScalarWhereWithAggregatesInput", {})
export class PostLikeScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PostLikeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PostLikeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostLikeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PostLikeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostLikeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PostLikeScalarWhereWithAggregatesInput[] | undefined;

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

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;
}
