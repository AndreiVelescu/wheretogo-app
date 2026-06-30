import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UploadStatus } from "../../enums/UploadStatus";

@TypeGraphQL.InputType("EnumUploadStatusFieldUpdateOperationsInput", {})
export class EnumUploadStatusFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => UploadStatus, {
    nullable: true
  })
  set?: "PENDING" | "UPLOADED" | "CONFIRMED" | "EXPIRED" | "FAILED" | undefined;
}
