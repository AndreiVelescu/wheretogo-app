import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostLikeCreateManyUserInput } from "../inputs/PostLikeCreateManyUserInput";

@TypeGraphQL.InputType("PostLikeCreateManyUserInputEnvelope", {})
export class PostLikeCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [PostLikeCreateManyUserInput], {
    nullable: false
  })
  data!: PostLikeCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
