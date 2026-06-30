import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCommentCreateManyPostInputEnvelope } from "../inputs/PostCommentCreateManyPostInputEnvelope";
import { PostCommentCreateOrConnectWithoutPostInput } from "../inputs/PostCommentCreateOrConnectWithoutPostInput";
import { PostCommentCreateWithoutPostInput } from "../inputs/PostCommentCreateWithoutPostInput";
import { PostCommentScalarWhereInput } from "../inputs/PostCommentScalarWhereInput";
import { PostCommentUpdateManyWithWhereWithoutPostInput } from "../inputs/PostCommentUpdateManyWithWhereWithoutPostInput";
import { PostCommentUpdateWithWhereUniqueWithoutPostInput } from "../inputs/PostCommentUpdateWithWhereUniqueWithoutPostInput";
import { PostCommentUpsertWithWhereUniqueWithoutPostInput } from "../inputs/PostCommentUpsertWithWhereUniqueWithoutPostInput";
import { PostCommentWhereUniqueInput } from "../inputs/PostCommentWhereUniqueInput";

@TypeGraphQL.InputType("PostCommentUpdateManyWithoutPostNestedInput", {})
export class PostCommentUpdateManyWithoutPostNestedInput {
  @TypeGraphQL.Field(_type => [PostCommentCreateWithoutPostInput], {
    nullable: true
  })
  create?: PostCommentCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCommentCreateOrConnectWithoutPostInput], {
    nullable: true
  })
  connectOrCreate?: PostCommentCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCommentUpsertWithWhereUniqueWithoutPostInput], {
    nullable: true
  })
  upsert?: PostCommentUpsertWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => PostCommentCreateManyPostInputEnvelope, {
    nullable: true
  })
  createMany?: PostCommentCreateManyPostInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PostCommentWhereUniqueInput], {
    nullable: true
  })
  set?: PostCommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCommentWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PostCommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCommentWhereUniqueInput], {
    nullable: true
  })
  delete?: PostCommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCommentWhereUniqueInput], {
    nullable: true
  })
  connect?: PostCommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCommentUpdateWithWhereUniqueWithoutPostInput], {
    nullable: true
  })
  update?: PostCommentUpdateWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCommentUpdateManyWithWhereWithoutPostInput], {
    nullable: true
  })
  updateMany?: PostCommentUpdateManyWithWhereWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCommentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PostCommentScalarWhereInput[] | undefined;
}
