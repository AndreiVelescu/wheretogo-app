import * as TypeGraphQL from "type-graphql";

export enum Platform {
  IOS = "IOS",
  ANDROID = "ANDROID",
  WEB = "WEB"
}
TypeGraphQL.registerEnumType(Platform, {
  name: "Platform",
  description: undefined,
});
