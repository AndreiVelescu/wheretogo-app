import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EnumUploadStatusFilter } from "../inputs/EnumUploadStatusFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("UploadSessionScalarWhereInput", {})
export class UploadSessionScalarWhereInput {
  @TypeGraphQL.Field(_type => [UploadSessionScalarWhereInput], {
    nullable: true
  })
  AND?: UploadSessionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UploadSessionScalarWhereInput], {
    nullable: true
  })
  OR?: UploadSessionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UploadSessionScalarWhereInput], {
    nullable: true
  })
  NOT?: UploadSessionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  fileKey?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  filename?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  contentType?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  size?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EnumUploadStatusFilter, {
    nullable: true
  })
  status?: EnumUploadStatusFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  confirmedAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  expiresAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;
}
