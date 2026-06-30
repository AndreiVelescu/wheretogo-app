import * as TypeGraphQL from "type-graphql";

export enum MediaType {
  IMAGE = "IMAGE",
  VIDEO = "VIDEO",
  AUDIO = "AUDIO"
}
TypeGraphQL.registerEnumType(MediaType, {
  name: "MediaType",
  description: undefined,
});
