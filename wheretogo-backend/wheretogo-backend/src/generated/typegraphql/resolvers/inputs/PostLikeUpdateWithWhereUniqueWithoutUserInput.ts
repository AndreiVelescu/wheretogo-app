import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostLikeUpdateWithoutUserInput } from "../inputs/PostLikeUpdateWithoutUserInput";
import { PostLikeWhereUniqueInput } from "../inputs/PostLikeWhereUniqueInput";

@TypeGraphQL.InputType("PostLikeUpdateWithWhereUniqueWithoutUserInput", {})
export class PostLikeUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => PostLikeWhereUniqueInput, {
    nullable: false
  })
  where!: PostLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostLikeUpdateWithoutUserInput, {
    nullable: false
  })
  data!: PostLikeUpdateWithoutUserInput;
}
