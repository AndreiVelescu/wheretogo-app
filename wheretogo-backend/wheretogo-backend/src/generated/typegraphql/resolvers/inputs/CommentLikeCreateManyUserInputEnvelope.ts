import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentLikeCreateManyUserInput } from "../inputs/CommentLikeCreateManyUserInput";

@TypeGraphQL.InputType("CommentLikeCreateManyUserInputEnvelope", {})
export class CommentLikeCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [CommentLikeCreateManyUserInput], {
    nullable: false
  })
  data!: CommentLikeCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
