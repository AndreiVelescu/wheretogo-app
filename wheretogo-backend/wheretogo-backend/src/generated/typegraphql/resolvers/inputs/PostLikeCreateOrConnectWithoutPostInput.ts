import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostLikeCreateWithoutPostInput } from "../inputs/PostLikeCreateWithoutPostInput";
import { PostLikeWhereUniqueInput } from "../inputs/PostLikeWhereUniqueInput";

@TypeGraphQL.InputType("PostLikeCreateOrConnectWithoutPostInput", {})
export class PostLikeCreateOrConnectWithoutPostInput {
  @TypeGraphQL.Field(_type => PostLikeWhereUniqueInput, {
    nullable: false
  })
  where!: PostLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostLikeCreateWithoutPostInput, {
    nullable: false
  })
  create!: PostLikeCreateWithoutPostInput;
}
