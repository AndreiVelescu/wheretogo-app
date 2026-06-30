import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostLikeCreateManyPostInputEnvelope } from "../inputs/PostLikeCreateManyPostInputEnvelope";
import { PostLikeCreateOrConnectWithoutPostInput } from "../inputs/PostLikeCreateOrConnectWithoutPostInput";
import { PostLikeCreateWithoutPostInput } from "../inputs/PostLikeCreateWithoutPostInput";
import { PostLikeScalarWhereInput } from "../inputs/PostLikeScalarWhereInput";
import { PostLikeUpdateManyWithWhereWithoutPostInput } from "../inputs/PostLikeUpdateManyWithWhereWithoutPostInput";
import { PostLikeUpdateWithWhereUniqueWithoutPostInput } from "../inputs/PostLikeUpdateWithWhereUniqueWithoutPostInput";
import { PostLikeUpsertWithWhereUniqueWithoutPostInput } from "../inputs/PostLikeUpsertWithWhereUniqueWithoutPostInput";
import { PostLikeWhereUniqueInput } from "../inputs/PostLikeWhereUniqueInput";

@TypeGraphQL.InputType("PostLikeUpdateManyWithoutPostNestedInput", {})
export class PostLikeUpdateManyWithoutPostNestedInput {
  @TypeGraphQL.Field(_type => [PostLikeCreateWithoutPostInput], {
    nullable: true
  })
  create?: PostLikeCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostLikeCreateOrConnectWithoutPostInput], {
    nullable: true
  })
  connectOrCreate?: PostLikeCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostLikeUpsertWithWhereUniqueWithoutPostInput], {
    nullable: true
  })
  upsert?: PostLikeUpsertWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => PostLikeCreateManyPostInputEnvelope, {
    nullable: true
  })
  createMany?: PostLikeCreateManyPostInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [PostLikeUpdateWithWhereUniqueWithoutPostInput], {
    nullable: true
  })
  update?: PostLikeUpdateWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostLikeUpdateManyWithWhereWithoutPostInput], {
    nullable: true
  })
  updateMany?: PostLikeUpdateManyWithWhereWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostLikeScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PostLikeScalarWhereInput[] | undefined;
}
