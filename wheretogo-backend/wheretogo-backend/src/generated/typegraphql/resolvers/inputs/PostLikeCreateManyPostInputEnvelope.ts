import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostLikeCreateManyPostInput } from "../inputs/PostLikeCreateManyPostInput";

@TypeGraphQL.InputType("PostLikeCreateManyPostInputEnvelope", {})
export class PostLikeCreateManyPostInputEnvelope {
  @TypeGraphQL.Field(_type => [PostLikeCreateManyPostInput], {
    nullable: false
  })
  data!: PostLikeCreateManyPostInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
