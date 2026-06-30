import * as TypeGraphQL from "type-graphql";

export enum PostVisibility {
  PUBLIC = "PUBLIC",
  FRIENDS = "FRIENDS",
  PRIVATE = "PRIVATE"
}
TypeGraphQL.registerEnumType(PostVisibility, {
  name: "PostVisibility",
  description: undefined,
});
