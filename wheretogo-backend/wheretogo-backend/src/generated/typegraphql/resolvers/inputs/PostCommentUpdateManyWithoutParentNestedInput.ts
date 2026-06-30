import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCommentCreateManyParentInputEnvelope } from "../inputs/PostCommentCreateManyParentInputEnvelope";
import { PostCommentCreateOrConnectWithoutParentInput } from "../inputs/PostCommentCreateOrConnectWithoutParentInput";
import { PostCommentCreateWithoutParentInput } from "../inputs/PostCommentCreateWithoutParentInput";
import { PostCommentScalarWhereInput } from "../inputs/PostCommentScalarWhereInput";
import { PostCommentUpdateManyWithWhereWithoutParentInput } from "../inputs/PostCommentUpdateManyWithWhereWithoutParentInput";
import { PostCommentUpdateWithWhereUniqueWithoutParentInput } from "../inputs/PostCommentUpdateWithWhereUniqueWithoutParentInput";
import { PostCommentUpsertWithWhereUniqueWithoutParentInput } from "../inputs/PostCommentUpsertWithWhereUniqueWithoutParentInput";
import { PostCommentWhereUniqueInput } from "../inputs/PostCommentWhereUniqueInput";

@TypeGraphQL.InputType("PostCommentUpdateManyWithoutParentNestedInput", {})
export class PostCommentUpdateManyWithoutParentNestedInput {
  @TypeGraphQL.Field(_type => [PostCommentCreateWithoutParentInput], {
    nullable: true
  })
  create?: PostCommentCreateWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCommentCreateOrConnectWithoutParentInput], {
    nullable: true
  })
  connectOrCreate?: PostCommentCreateOrConnectWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCommentUpsertWithWhereUniqueWithoutParentInput], {
    nullable: true
  })
  upsert?: PostCommentUpsertWithWhereUniqueWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => PostCommentCreateManyParentInputEnvelope, {
    nullable: true
  })
  createMany?: PostCommentCreateManyParentInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [PostCommentUpdateWithWhereUniqueWithoutParentInput], {
    nullable: true
  })
  update?: PostCommentUpdateWithWhereUniqueWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCommentUpdateManyWithWhereWithoutParentInput], {
    nullable: true
  })
  updateMany?: PostCommentUpdateManyWithWhereWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCommentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PostCommentScalarWhereInput[] | undefined;
}
