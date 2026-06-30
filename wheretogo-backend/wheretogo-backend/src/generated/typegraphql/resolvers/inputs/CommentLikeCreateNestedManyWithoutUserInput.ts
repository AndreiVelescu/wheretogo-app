import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentLikeCreateManyUserInputEnvelope } from "../inputs/CommentLikeCreateManyUserInputEnvelope";
import { CommentLikeCreateOrConnectWithoutUserInput } from "../inputs/CommentLikeCreateOrConnectWithoutUserInput";
import { CommentLikeCreateWithoutUserInput } from "../inputs/CommentLikeCreateWithoutUserInput";
import { CommentLikeWhereUniqueInput } from "../inputs/CommentLikeWhereUniqueInput";

@TypeGraphQL.InputType("CommentLikeCreateNestedManyWithoutUserInput", {})
export class CommentLikeCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [CommentLikeCreateWithoutUserInput], {
    nullable: true
  })
  create?: CommentLikeCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentLikeCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: CommentLikeCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentLikeCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: CommentLikeCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CommentLikeWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentLikeWhereUniqueInput[] | undefined;
}
