import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostLikeCreateWithoutUserInput } from "../inputs/PostLikeCreateWithoutUserInput";
import { PostLikeUpdateWithoutUserInput } from "../inputs/PostLikeUpdateWithoutUserInput";
import { PostLikeWhereUniqueInput } from "../inputs/PostLikeWhereUniqueInput";

@TypeGraphQL.InputType("PostLikeUpsertWithWhereUniqueWithoutUserInput", {})
export class PostLikeUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => PostLikeWhereUniqueInput, {
    nullable: false
  })
  where!: PostLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostLikeUpdateWithoutUserInput, {
    nullable: false
  })
  update!: PostLikeUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => PostLikeCreateWithoutUserInput, {
    nullable: false
  })
  create!: PostLikeCreateWithoutUserInput;
}
