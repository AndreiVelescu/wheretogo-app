import * as TypeGraphQL from "type-graphql";

export enum PostReportScalarFieldEnum {
  id = "id",
  reporterId = "reporterId",
  postId = "postId",
  reason = "reason",
  details = "details",
  status = "status",
  reviewedAt = "reviewedAt",
  createdAt = "createdAt"
}
TypeGraphQL.registerEnumType(PostReportScalarFieldEnum, {
  name: "PostReportScalarFieldEnum",
  description: undefined,
});
