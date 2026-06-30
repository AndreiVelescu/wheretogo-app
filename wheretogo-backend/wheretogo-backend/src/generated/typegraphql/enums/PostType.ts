import * as TypeGraphQL from "type-graphql";

export enum PostType {
  EXPERIENCE = "EXPERIENCE",
  TIP = "TIP",
  TRIP = "TRIP"
}
TypeGraphQL.registerEnumType(PostType, {
  name: "PostType",
  description: undefined,
});
