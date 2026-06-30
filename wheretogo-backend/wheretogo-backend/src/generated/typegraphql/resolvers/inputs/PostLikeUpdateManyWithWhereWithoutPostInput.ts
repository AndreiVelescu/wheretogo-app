import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostLikeScalarWhereInput } from "../inputs/PostLikeScalarWhereInput";
import { PostLikeUpdateManyMutationInput } from "../inputs/PostLikeUpdateManyMutationInput";

@TypeGraphQL.InputType("PostLikeUpdateManyWithWhereWithoutPostInput", {})
export class PostLikeUpdateManyWithWhereWithoutPostInput {
  @TypeGraphQL.Field(_type => PostLikeScalarWhereInput, {
    nullable: false
  })
  where!: PostLikeScalarWhereInput;

  @TypeGraphQL.Field(_type => PostLikeUpdateManyMutationInput, {
    nullable: false
  })
  data!: PostLikeUpdateManyMutationInput;
}
