import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCommentCreateOrConnectWithoutRepliesInput } from "../inputs/PostCommentCreateOrConnectWithoutRepliesInput";
import { PostCommentCreateWithoutRepliesInput } from "../inputs/PostCommentCreateWithoutRepliesInput";
import { PostCommentUpdateToOneWithWhereWithoutRepliesInput } from "../inputs/PostCommentUpdateToOneWithWhereWithoutRepliesInput";
import { PostCommentUpsertWithoutRepliesInput } from "../inputs/PostCommentUpsertWithoutRepliesInput";
import { PostCommentWhereInput } from "../inputs/PostCommentWhereInput";
import { PostCommentWhereUniqueInput } from "../inputs/PostCommentWhereUniqueInput";

@TypeGraphQL.InputType("PostCommentUpdateOneWithoutRepliesNestedInput", {})
export class PostCommentUpdateOneWithoutRepliesNestedInput {
  @TypeGraphQL.Field(_type => PostCommentCreateWithoutRepliesInput, {
    nullable: true
  })
  create?: PostCommentCreateWithoutRepliesInput | undefined;

  @TypeGraphQL.Field(_type => PostCommentCreateOrConnectWithoutRepliesInput, {
    nullable: true
  })
  connectOrCreate?: PostCommentCreateOrConnectWithoutRepliesInput | undefined;

  @TypeGraphQL.Field(_type => PostCommentUpsertWithoutRepliesInput, {
    nullable: true
  })
  upsert?: PostCommentUpsertWithoutRepliesInput | undefined;

  @TypeGraphQL.Field(_type => PostCommentWhereInput, {
    nullable: true
  })
  disconnect?: PostCommentWhereInput | undefined;

  @TypeGraphQL.Field(_type => PostCommentWhereInput, {
    nullable: true
  })
  delete?: PostCommentWhereInput | undefined;

  @TypeGraphQL.Field(_type => PostCommentWhereUniqueInput, {
    nullable: true
  })
  connect?: PostCommentWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PostCommentUpdateToOneWithWhereWithoutRepliesInput, {
    nullable: true
  })
  update?: PostCommentUpdateToOneWithWhereWithoutRepliesInput | undefined;
}
