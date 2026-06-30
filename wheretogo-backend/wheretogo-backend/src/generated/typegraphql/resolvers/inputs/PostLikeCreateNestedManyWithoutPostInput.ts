import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostLikeCreateManyPostInputEnvelope } from "../inputs/PostLikeCreateManyPostInputEnvelope";
import { PostLikeCreateOrConnectWithoutPostInput } from "../inputs/PostLikeCreateOrConnectWithoutPostInput";
import { PostLikeCreateWithoutPostInput } from "../inputs/PostLikeCreateWithoutPostInput";
import { PostLikeWhereUniqueInput } from "../inputs/PostLikeWhereUniqueInput";

@TypeGraphQL.InputType("PostLikeCreateNestedManyWithoutPostInput", {})
export class PostLikeCreateNestedManyWithoutPostInput {
  @TypeGraphQL.Field(_type => [PostLikeCreateWithoutPostInput], {
    nullable: true
  })
  create?: PostLikeCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostLikeCreateOrConnectWithoutPostInput], {
    nullable: true
  })
  connectOrCreate?: PostLikeCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => PostLikeCreateManyPostInputEnvelope, {
    nullable: true
  })
  createMany?: PostLikeCreateManyPostInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PostLikeWhereUniqueInput], {
    nullable: true
  })
  connect?: PostLikeWhereUniqueInput[] | undefined;
}
