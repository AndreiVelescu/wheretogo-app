import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentLikeCreateManyCommentInputEnvelope } from "../inputs/CommentLikeCreateManyCommentInputEnvelope";
import { CommentLikeCreateOrConnectWithoutCommentInput } from "../inputs/CommentLikeCreateOrConnectWithoutCommentInput";
import { CommentLikeCreateWithoutCommentInput } from "../inputs/CommentLikeCreateWithoutCommentInput";
import { CommentLikeScalarWhereInput } from "../inputs/CommentLikeScalarWhereInput";
import { CommentLikeUpdateManyWithWhereWithoutCommentInput } from "../inputs/CommentLikeUpdateManyWithWhereWithoutCommentInput";
import { CommentLikeUpdateWithWhereUniqueWithoutCommentInput } from "../inputs/CommentLikeUpdateWithWhereUniqueWithoutCommentInput";
import { CommentLikeUpsertWithWhereUniqueWithoutCommentInput } from "../inputs/CommentLikeUpsertWithWhereUniqueWithoutCommentInput";
import { CommentLikeWhereUniqueInput } from "../inputs/CommentLikeWhereUniqueInput";

@TypeGraphQL.InputType("CommentLikeUpdateManyWithoutCommentNestedInput", {})
export class CommentLikeUpdateManyWithoutCommentNestedInput {
  @TypeGraphQL.Field(_type => [CommentLikeCreateWithoutCommentInput], {
    nullable: true
  })
  create?: CommentLikeCreateWithoutCommentInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentLikeCreateOrConnectWithoutCommentInput], {
    nullable: true
  })
  connectOrCreate?: CommentLikeCreateOrConnectWithoutCommentInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentLikeUpsertWithWhereUniqueWithoutCommentInput], {
    nullable: true
  })
  upsert?: CommentLikeUpsertWithWhereUniqueWithoutCommentInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentLikeCreateManyCommentInputEnvelope, {
    nullable: true
  })
  createMany?: CommentLikeCreateManyCommentInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CommentLikeWhereUniqueInput], {
    nullable: true
  })
  set?: CommentLikeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentLikeWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CommentLikeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentLikeWhereUniqueInput], {
    nullable: true
  })
  delete?: CommentLikeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentLikeWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentLikeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentLikeUpdateWithWhereUniqueWithoutCommentInput], {
    nullable: true
  })
  update?: CommentLikeUpdateWithWhereUniqueWithoutCommentInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentLikeUpdateManyWithWhereWithoutCommentInput], {
    nullable: true
  })
  updateMany?: CommentLikeUpdateManyWithWhereWithoutCommentInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentLikeScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CommentLikeScalarWhereInput[] | undefined;
}
