import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostLikeCreateWithoutUserInput } from "../inputs/PostLikeCreateWithoutUserInput";
import { PostLikeWhereUniqueInput } from "../inputs/PostLikeWhereUniqueInput";

@TypeGraphQL.InputType("PostLikeCreateOrConnectWithoutUserInput", {})
export class PostLikeCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => PostLikeWhereUniqueInput, {
    nullable: false
  })
  where!: PostLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostLikeCreateWithoutUserInput, {
    nullable: false
  })
  create!: PostLikeCreateWithoutUserInput;
}
