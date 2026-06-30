import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UploadStatus } from "../../enums/UploadStatus";

@TypeGraphQL.InputType("NestedEnumUploadStatusFilter", {})
export class NestedEnumUploadStatusFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumUploadStatusFilter, {
    nullable: true
  })
  not?: NestedEnumUploadStatusFilter | undefined;
}
