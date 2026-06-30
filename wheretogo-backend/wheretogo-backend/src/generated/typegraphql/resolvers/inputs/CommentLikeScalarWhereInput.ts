import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("CommentLikeScalarWhereInput", {})
export class CommentLikeScalarWhereInput {
  @TypeGraphQL.Field(_type => [CommentLikeScalarWhereInput], {
    nullable: true
  })
  AND?: CommentLikeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentLikeScalarWhereInput], {
    nullable: true
  })
  OR?: CommentLikeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentLikeScalarWhereInput], {
    nullable: true
  })
  NOT?: CommentLikeScalarWhereInput[] | undefined;

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
  commentId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;
}
