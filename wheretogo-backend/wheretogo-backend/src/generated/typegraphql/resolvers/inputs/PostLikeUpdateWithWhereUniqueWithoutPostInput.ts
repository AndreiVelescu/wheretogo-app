import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostLikeUpdateWithoutPostInput } from "../inputs/PostLikeUpdateWithoutPostInput";
import { PostLikeWhereUniqueInput } from "../inputs/PostLikeWhereUniqueInput";

@TypeGraphQL.InputType("PostLikeUpdateWithWhereUniqueWithoutPostInput", {})
export class PostLikeUpdateWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field(_type => PostLikeWhereUniqueInput, {
    nullable: false
  })
  where!: PostLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostLikeUpdateWithoutPostInput, {
    nullable: false
  })
  data!: PostLikeUpdateWithoutPostInput;
}
