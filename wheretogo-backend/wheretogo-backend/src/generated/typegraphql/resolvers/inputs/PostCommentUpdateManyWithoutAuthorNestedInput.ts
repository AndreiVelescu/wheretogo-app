import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCommentCreateManyAuthorInputEnvelope } from "../inputs/PostCommentCreateManyAuthorInputEnvelope";
import { PostCommentCreateOrConnectWithoutAuthorInput } from "../inputs/PostCommentCreateOrConnectWithoutAuthorInput";
import { PostCommentCreateWithoutAuthorInput } from "../inputs/PostCommentCreateWithoutAuthorInput";
import { PostCommentScalarWhereInput } from "../inputs/PostCommentScalarWhereInput";
import { PostCommentUpdateManyWithWhereWithoutAuthorInput } from "../inputs/PostCommentUpdateManyWithWhereWithoutAuthorInput";
import { PostCommentUpdateWithWhereUniqueWithoutAuthorInput } from "../inputs/PostCommentUpdateWithWhereUniqueWithoutAuthorInput";
import { PostCommentUpsertWithWhereUniqueWithoutAuthorInput } from "../inputs/PostCommentUpsertWithWhereUniqueWithoutAuthorInput";
import { PostCommentWhereUniqueInput } from "../inputs/PostCommentWhereUniqueInput";

@TypeGraphQL.InputType("PostCommentUpdateManyWithoutAuthorNestedInput", {})
export class PostCommentUpdateManyWithoutAuthorNestedInput {
  @TypeGraphQL.Field(_type => [PostCommentCreateWithoutAuthorInput], {
    nullable: true
  })
  create?: PostCommentCreateWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCommentCreateOrConnectWithoutAuthorInput], {
    nullable: true
  })
  connectOrCreate?: PostCommentCreateOrConnectWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCommentUpsertWithWhereUniqueWithoutAuthorInput], {
    nullable: true
  })
  upsert?: PostCommentUpsertWithWhereUniqueWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => PostCommentCreateManyAuthorInputEnvelope, {
    nullable: true
  })
  createMany?: PostCommentCreateManyAuthorInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [PostCommentUpdateWithWhereUniqueWithoutAuthorInput], {
    nullable: true
  })
  update?: PostCommentUpdateWithWhereUniqueWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCommentUpdateManyWithWhereWithoutAuthorInput], {
    nullable: true
  })
  updateMany?: PostCommentUpdateManyWithWhereWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCommentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PostCommentScalarWhereInput[] | undefined;
}
