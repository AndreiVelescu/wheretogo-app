import * as TypeGraphQL from "type-graphql";

export enum UploadStatus {
  PENDING = "PENDING",
  UPLOADED = "UPLOADED",
  CONFIRMED = "CONFIRMED",
  EXPIRED = "EXPIRED",
  FAILED = "FAILED"
}
TypeGraphQL.registerEnumType(UploadStatus, {
  name: "UploadStatus",
  description: undefined,
});
