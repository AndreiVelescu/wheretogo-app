import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("CommentLikeScalarWhereWithAggregatesInput", {})
export class CommentLikeScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [CommentLikeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: CommentLikeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentLikeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: CommentLikeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentLikeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: CommentLikeScalarWhereWithAggregatesInput[] | undefined;

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
  commentId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;
}
