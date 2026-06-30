import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostLikeCreateManyUserInputEnvelope } from "../inputs/PostLikeCreateManyUserInputEnvelope";
import { PostLikeCreateOrConnectWithoutUserInput } from "../inputs/PostLikeCreateOrConnectWithoutUserInput";
import { PostLikeCreateWithoutUserInput } from "../inputs/PostLikeCreateWithoutUserInput";
import { PostLikeScalarWhereInput } from "../inputs/PostLikeScalarWhereInput";
import { PostLikeUpdateManyWithWhereWithoutUserInput } from "../inputs/PostLikeUpdateManyWithWhereWithoutUserInput";
import { PostLikeUpdateWithWhereUniqueWithoutUserInput } from "../inputs/PostLikeUpdateWithWhereUniqueWithoutUserInput";
import { PostLikeUpsertWithWhereUniqueWithoutUserInput } from "../inputs/PostLikeUpsertWithWhereUniqueWithoutUserInput";
import { PostLikeWhereUniqueInput } from "../inputs/PostLikeWhereUniqueInput";

@TypeGraphQL.InputType("PostLikeUpdateManyWithoutUserNestedInput", {})
export class PostLikeUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [PostLikeCreateWithoutUserInput], {
    nullable: true
  })
  create?: PostLikeCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostLikeCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: PostLikeCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostLikeUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: PostLikeUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => PostLikeCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: PostLikeCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PostLikeWhereUniqueInput], {
    nullable: true
  })
  set?: PostLikeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostLikeWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PostLikeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostLikeWhereUniqueInput], {
    nullable: true
  })
  delete?: PostLikeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostLikeWhereUniqueInput], {
    nullable: true
  })
  connect?: PostLikeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostLikeUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: PostLikeUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostLikeUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: PostLikeUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostLikeScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PostLikeScalarWhereInput[] | undefined;
}
