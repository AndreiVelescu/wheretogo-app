import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateNestedOneWithoutSharesInput } from "../inputs/PostCreateNestedOneWithoutSharesInput";
import { SharePlatform } from "../../enums/SharePlatform";

@TypeGraphQL.InputType("PostShareCreateWithoutUserInput", {})
export class PostShareCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => SharePlatform, {
    nullable: true
  })
  platform?: "INTERNAL" | "FACEBOOK" | "INSTAGRAM" | "TWITTER" | "WHATSAPP" | "LINK" | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => PostCreateNestedOneWithoutSharesInput, {
    nullable: false
  })
  post!: PostCreateNestedOneWithoutSharesInput;
}
