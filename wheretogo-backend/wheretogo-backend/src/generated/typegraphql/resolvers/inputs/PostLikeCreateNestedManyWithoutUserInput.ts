import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostLikeCreateManyUserInputEnvelope } from "../inputs/PostLikeCreateManyUserInputEnvelope";
import { PostLikeCreateOrConnectWithoutUserInput } from "../inputs/PostLikeCreateOrConnectWithoutUserInput";
import { PostLikeCreateWithoutUserInput } from "../inputs/PostLikeCreateWithoutUserInput";
import { PostLikeWhereUniqueInput } from "../inputs/PostLikeWhereUniqueInput";

@TypeGraphQL.InputType("PostLikeCreateNestedManyWithoutUserInput", {})
export class PostLikeCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [PostLikeCreateWithoutUserInput], {
    nullable: true
  })
  create?: PostLikeCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostLikeCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: PostLikeCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => PostLikeCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: PostLikeCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PostLikeWhereUniqueInput], {
    nullable: true
  })
  connect?: PostLikeWhereUniqueInput[] | undefined;
}
