import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumSharePlatformNullableFilter } from "../inputs/EnumSharePlatformNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PostRelationFilter } from "../inputs/PostRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("PostShareWhereInput", {})
export class PostShareWhereInput {
  @TypeGraphQL.Field(_type => [PostShareWhereInput], {
    nullable: true
  })
  AND?: PostShareWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostShareWhereInput], {
    nullable: true
  })
  OR?: PostShareWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostShareWhereInput], {
    nullable: true
  })
  NOT?: PostShareWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  postId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => EnumSharePlatformNullableFilter, {
    nullable: true
  })
  platform?: EnumSharePlatformNullableFilter | undefined;

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
