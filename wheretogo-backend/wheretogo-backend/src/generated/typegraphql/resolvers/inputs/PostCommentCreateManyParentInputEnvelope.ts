import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCommentCreateManyParentInput } from "../inputs/PostCommentCreateManyParentInput";

@TypeGraphQL.InputType("PostCommentCreateManyParentInputEnvelope", {})
export class PostCommentCreateManyParentInputEnvelope {
  @TypeGraphQL.Field(_type => [PostCommentCreateManyParentInput], {
    nullable: false
  })
  data!: PostCommentCreateManyParentInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
