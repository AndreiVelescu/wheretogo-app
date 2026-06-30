import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCommentCreateOrConnectWithoutLikesInput } from "../inputs/PostCommentCreateOrConnectWithoutLikesInput";
import { PostCommentCreateWithoutLikesInput } from "../inputs/PostCommentCreateWithoutLikesInput";
import { PostCommentUpdateToOneWithWhereWithoutLikesInput } from "../inputs/PostCommentUpdateToOneWithWhereWithoutLikesInput";
import { PostCommentUpsertWithoutLikesInput } from "../inputs/PostCommentUpsertWithoutLikesInput";
import { PostCommentWhereUniqueInput } from "../inputs/PostCommentWhereUniqueInput";

@TypeGraphQL.InputType("PostCommentUpdateOneRequiredWithoutLikesNestedInput", {})
export class PostCommentUpdateOneRequiredWithoutLikesNestedInput {
  @TypeGraphQL.Field(_type => PostCommentCreateWithoutLikesInput, {
    nullable: true
  })
  create?: PostCommentCreateWithoutLikesInput | undefined;

  @TypeGraphQL.Field(_type => PostCommentCreateOrConnectWithoutLikesInput, {
    nullable: true
  })
  connectOrCreate?: PostCommentCreateOrConnectWithoutLikesInput | undefined;

  @TypeGraphQL.Field(_type => PostCommentUpsertWithoutLikesInput, {
    nullable: true
  })
  upsert?: PostCommentUpsertWithoutLikesInput | undefined;

  @TypeGraphQL.Field(_type => PostCommentWhereUniqueInput, {
    nullable: true
  })
  connect?: PostCommentWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PostCommentUpdateToOneWithWhereWithoutLikesInput, {
    nullable: true
  })
  update?: PostCommentUpdateToOneWithWhereWithoutLikesInput | undefined;
}
