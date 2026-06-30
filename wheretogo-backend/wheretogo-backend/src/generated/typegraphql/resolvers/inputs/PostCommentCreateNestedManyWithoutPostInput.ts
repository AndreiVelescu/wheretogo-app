import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCommentCreateManyPostInputEnvelope } from "../inputs/PostCommentCreateManyPostInputEnvelope";
import { PostCommentCreateOrConnectWithoutPostInput } from "../inputs/PostCommentCreateOrConnectWithoutPostInput";
import { PostCommentCreateWithoutPostInput } from "../inputs/PostCommentCreateWithoutPostInput";
import { PostCommentWhereUniqueInput } from "../inputs/PostCommentWhereUniqueInput";

@TypeGraphQL.InputType("PostCommentCreateNestedManyWithoutPostInput", {})
export class PostCommentCreateNestedManyWithoutPostInput {
  @TypeGraphQL.Field(_type => [PostCommentCreateWithoutPostInput], {
    nullable: true
  })
  create?: PostCommentCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCommentCreateOrConnectWithoutPostInput], {
    nullable: true
  })
  connectOrCreate?: PostCommentCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => PostCommentCreateManyPostInputEnvelope, {
    nullable: true
  })
  createMany?: PostCommentCreateManyPostInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PostCommentWhereUniqueInput], {
    nullable: true
  })
  connect?: PostCommentWhereUniqueInput[] | undefined;
}
