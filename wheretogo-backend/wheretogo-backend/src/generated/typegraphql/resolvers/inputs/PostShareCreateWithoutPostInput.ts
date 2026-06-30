import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutPostSharesInput } from "../inputs/UserCreateNestedOneWithoutPostSharesInput";
import { SharePlatform } from "../../enums/SharePlatform";

@TypeGraphQL.InputType("PostShareCreateWithoutPostInput", {})
export class PostShareCreateWithoutPostInput {
  @TypeGraphQL.Field(_type => SharePlatform, {
    nullable: true
  })
  platform?: "INTERNAL" | "FACEBOOK" | "INSTAGRAM" | "TWITTER" | "WHATSAPP" | "LINK" | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPostSharesInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutPostSharesInput;
}
