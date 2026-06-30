import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumReportReasonWithAggregatesFilter } from "../inputs/EnumReportReasonWithAggregatesFilter";
import { EnumReportStatusWithAggregatesFilter } from "../inputs/EnumReportStatusWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("PostReportScalarWhereWithAggregatesInput", {})
export class PostReportScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PostReportScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PostReportScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostReportScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PostReportScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostReportScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PostReportScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  reporterId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  postId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumReportReasonWithAggregatesFilter, {
    nullable: true
  })
  reason?: EnumReportReasonWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  details?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumReportStatusWithAggregatesFilter, {
    nullable: true
  })
  status?: EnumReportStatusWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  reviewedAt?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;
}
