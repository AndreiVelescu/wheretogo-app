import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentLikeCreateManyUserInputEnvelope } from "../inputs/CommentLikeCreateManyUserInputEnvelope";
import { CommentLikeCreateOrConnectWithoutUserInput } from "../inputs/CommentLikeCreateOrConnectWithoutUserInput";
import { CommentLikeCreateWithoutUserInput } from "../inputs/CommentLikeCreateWithoutUserInput";
import { CommentLikeScalarWhereInput } from "../inputs/CommentLikeScalarWhereInput";
import { CommentLikeUpdateManyWithWhereWithoutUserInput } from "../inputs/CommentLikeUpdateManyWithWhereWithoutUserInput";
import { CommentLikeUpdateWithWhereUniqueWithoutUserInput } from "../inputs/CommentLikeUpdateWithWhereUniqueWithoutUserInput";
import { CommentLikeUpsertWithWhereUniqueWithoutUserInput } from "../inputs/CommentLikeUpsertWithWhereUniqueWithoutUserInput";
import { CommentLikeWhereUniqueInput } from "../inputs/CommentLikeWhereUniqueInput";

@TypeGraphQL.InputType("CommentLikeUpdateManyWithoutUserNestedInput", {})
export class CommentLikeUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [CommentLikeCreateWithoutUserInput], {
    nullable: true
  })
  create?: CommentLikeCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentLikeCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: CommentLikeCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentLikeUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: CommentLikeUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentLikeCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: CommentLikeCreateManyUserInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [CommentLikeUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: CommentLikeUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentLikeUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: CommentLikeUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentLikeScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CommentLikeScalarWhereInput[] | undefined;
}
