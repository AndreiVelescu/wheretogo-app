import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostLikeScalarWhereInput } from "../inputs/PostLikeScalarWhereInput";
import { PostLikeUpdateManyMutationInput } from "../inputs/PostLikeUpdateManyMutationInput";

@TypeGraphQL.InputType("PostLikeUpdateManyWithWhereWithoutUserInput", {})
export class PostLikeUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => PostLikeScalarWhereInput, {
    nullable: false
  })
  where!: PostLikeScalarWhereInput;

  @TypeGraphQL.Field(_type => PostLikeUpdateManyMutationInput, {
    nullable: false
  })
  data!: PostLikeUpdateManyMutationInput;
}
