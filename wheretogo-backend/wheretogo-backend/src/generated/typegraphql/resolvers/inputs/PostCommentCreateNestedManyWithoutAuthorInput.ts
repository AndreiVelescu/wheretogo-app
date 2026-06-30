import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCommentCreateManyAuthorInputEnvelope } from "../inputs/PostCommentCreateManyAuthorInputEnvelope";
import { PostCommentCreateOrConnectWithoutAuthorInput } from "../inputs/PostCommentCreateOrConnectWithoutAuthorInput";
import { PostCommentCreateWithoutAuthorInput } from "../inputs/PostCommentCreateWithoutAuthorInput";
import { PostCommentWhereUniqueInput } from "../inputs/PostCommentWhereUniqueInput";

@TypeGraphQL.InputType("PostCommentCreateNestedManyWithoutAuthorInput", {})
export class PostCommentCreateNestedManyWithoutAuthorInput {
  @TypeGraphQL.Field(_type => [PostCommentCreateWithoutAuthorInput], {
    nullable: true
  })
  create?: PostCommentCreateWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCommentCreateOrConnectWithoutAuthorInput], {
    nullable: true
  })
  connectOrCreate?: PostCommentCreateOrConnectWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => PostCommentCreateManyAuthorInputEnvelope, {
    nullable: true
  })
  createMany?: PostCommentCreateManyAuthorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PostCommentWhereUniqueInput], {
    nullable: true
  })
  connect?: PostCommentWhereUniqueInput[] | undefined;
}
