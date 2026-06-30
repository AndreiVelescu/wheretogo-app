import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumUploadStatusWithAggregatesFilter } from "../inputs/EnumUploadStatusWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("UploadSessionScalarWhereWithAggregatesInput", {})
export class UploadSessionScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [UploadSessionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: UploadSessionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UploadSessionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: UploadSessionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UploadSessionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: UploadSessionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  userId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  fileKey?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  filename?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  contentType?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  size?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumUploadStatusWithAggregatesFilter, {
    nullable: true
  })
  status?: EnumUploadStatusWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  confirmedAt?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  expiresAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;
}
