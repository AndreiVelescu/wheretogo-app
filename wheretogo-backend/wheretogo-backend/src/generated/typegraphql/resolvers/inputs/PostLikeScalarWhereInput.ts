import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("PostLikeScalarWhereInput", {})
export class PostLikeScalarWhereInput {
  @TypeGraphQL.Field(_type => [PostLikeScalarWhereInput], {
    nullable: true
  })
  AND?: PostLikeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostLikeScalarWhereInput], {
    nullable: true
  })
  OR?: PostLikeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostLikeScalarWhereInput], {
    nullable: true
  })
  NOT?: PostLikeScalarWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;
}
