import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PostLikeUserIdPostIdCompoundUniqueInput } from "../inputs/PostLikeUserIdPostIdCompoundUniqueInput";
import { PostLikeWhereInput } from "../inputs/PostLikeWhereInput";
import { PostRelationFilter } from "../inputs/PostRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("PostLikeWhereUniqueInput", {})
export class PostLikeWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => PostLikeUserIdPostIdCompoundUniqueInput, {
    nullable: true
  })
  userId_postId?: PostLikeUserIdPostIdCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [PostLikeWhereInput], {
    nullable: true
  })
  AND?: PostLikeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostLikeWhereInput], {
    nullable: true
  })
  OR?: PostLikeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostLikeWhereInput], {
    nullable: true
  })
  NOT?: PostLikeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  postId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PostRelationFilter, {
    nullable: true
  })
  post?: PostRelationFilter | undefined;
}
