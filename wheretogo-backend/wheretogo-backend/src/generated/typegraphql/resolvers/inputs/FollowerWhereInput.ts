import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("FollowerWhereInput", {})
export class FollowerWhereInput {
  @TypeGraphQL.Field(_type => [FollowerWhereInput], {
    nullable: true
  })
  AND?: FollowerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowerWhereInput], {
    nullable: true
  })
  OR?: FollowerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowerWhereInput], {
    nullable: true
  })
  NOT?: FollowerWhereInput[] | undefined;

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
  followerId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  follower?: UserRelationFilter | undefined;
}
