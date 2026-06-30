import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumUploadStatusFilter } from "../inputs/NestedEnumUploadStatusFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { UploadStatus } from "../../enums/UploadStatus";

@TypeGraphQL.InputType("NestedEnumUploadStatusWithAggregatesFilter", {})
export class NestedEnumUploadStatusWithAggregatesFilter {
  @TypeGraphQL.Field(_type => UploadStatus, {
    nullable: true
  })
  equals?: "PENDING" | "UPLOADED" | "CONFIRMED" | "EXPIRED" | "FAILED" | undefined;

  @TypeGraphQL.Field(_type => [UploadStatus], {
    nullable: true
  })
  in?: Array<"PENDING" | "UPLOADED" | "CONFIRMED" | "EXPIRED" | "FAILED"> | undefined;

  @TypeGraphQL.Field(_type => [UploadStatus], {
    nullable: true
  })
  notIn?: Array<"PENDING" | "UPLOADED" | "CONFIRMED" | "EXPIRED" | "FAILED"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumUploadStatusWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumUploadStatusWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumUploadStatusFilter, {
    nullable: true
  })
  _min?: NestedEnumUploadStatusFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumUploadStatusFilter, {
    nullable: true
  })
  _max?: NestedEnumUploadStatusFilter | undefined;
}
