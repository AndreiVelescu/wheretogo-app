import * as TypeGraphQL from "type-graphql";

export enum UploadSessionScalarFieldEnum {
  id = "id",
  userId = "userId",
  fileKey = "fileKey",
  filename = "filename",
  contentType = "contentType",
  size = "size",
  status = "status",
  confirmedAt = "confirmedAt",
  expiresAt = "expiresAt",
  createdAt = "createdAt"
}
TypeGraphQL.registerEnumType(UploadSessionScalarFieldEnum, {
  name: "UploadSessionScalarFieldEnum",
  description: undefined,
});
