import * as TypeGraphQL from "type-graphql";

export enum PostMetricsScalarFieldEnum {
  postId = "postId",
  views = "views",
  clicks = "clicks",
  impressions = "impressions",
  engagementRate = "engagementRate",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(PostMetricsScalarFieldEnum, {
  name: "PostMetricsScalarFieldEnum",
  description: undefined,
});
