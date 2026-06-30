import * as TypeGraphQL from "type-graphql";

export enum SharePlatform {
  INTERNAL = "INTERNAL",
  FACEBOOK = "FACEBOOK",
  INSTAGRAM = "INSTAGRAM",
  TWITTER = "TWITTER",
  WHATSAPP = "WHATSAPP",
  LINK = "LINK"
}
TypeGraphQL.registerEnumType(SharePlatform, {
  name: "SharePlatform",
  description: undefined,
});
