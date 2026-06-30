import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCommentCreateManyParentInputEnvelope } from "../inputs/PostCommentCreateManyParentInputEnvelope";
import { PostCommentCreateOrConnectWithoutParentInput } from "../inputs/PostCommentCreateOrConnectWithoutParentInput";
import { PostCommentCreateWithoutParentInput } from "../inputs/PostCommentCreateWithoutParentInput";
import { PostCommentWhereUniqueInput } from "../inputs/PostCommentWhereUniqueInput";

@TypeGraphQL.InputType("PostCommentCreateNestedManyWithoutParentInput", {})
export class PostCommentCreateNestedManyWithoutParentInput {
  @TypeGraphQL.Field(_type => [PostCommentCreateWithoutParentInput], {
    nullable: true
  })
  create?: PostCommentCreateWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCommentCreateOrConnectWithoutParentInput], {
    nullable: true
  })
  connectOrCreate?: PostCommentCreateOrConnectWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => PostCommentCreateManyParentInputEnvelope, {
    nullable: true
  })
  createMany?: PostCommentCreateManyParentInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PostCommentWhereUniqueInput], {
    nullable: true
  })
  connect?: PostCommentWhereUniqueInput[] | undefined;
}
