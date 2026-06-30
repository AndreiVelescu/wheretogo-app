import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PostRelationFilter } from "../inputs/PostRelationFilter";
import { SavedPostUserIdPostIdCompoundUniqueInput } from "../inputs/SavedPostUserIdPostIdCompoundUniqueInput";
import { SavedPostWhereInput } from "../inputs/SavedPostWhereInput";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("SavedPostWhereUniqueInput", {})
export class SavedPostWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => SavedPostUserIdPostIdCompoundUniqueInput, {
    nullable: true
  })
  userId_postId?: SavedPostUserIdPostIdCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [SavedPostWhereInput], {
    nullable: true
  })
  AND?: SavedPostWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SavedPostWhereInput], {
    nullable: true
  })
  OR?: SavedPostWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SavedPostWhereInput], {
    nullable: true
  })
  NOT?: SavedPostWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  postId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  note?: StringNullableFilter | undefined;

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
