import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostShareCreateManyUserInput } from "../inputs/PostShareCreateManyUserInput";

@TypeGraphQL.InputType("PostShareCreateManyUserInputEnvelope", {})
export class PostShareCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [PostShareCreateManyUserInput], {
    nullable: false
  })
  data!: PostShareCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
