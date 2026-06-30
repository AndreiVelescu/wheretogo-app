import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumSharePlatformNullableFilter } from "../inputs/EnumSharePlatformNullableFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("PostShareScalarWhereInput", {})
export class PostShareScalarWhereInput {
  @TypeGraphQL.Field(_type => [PostShareScalarWhereInput], {
    nullable: true
  })
  AND?: PostShareScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostShareScalarWhereInput], {
    nullable: true
  })
  OR?: PostShareScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostShareScalarWhereInput], {
    nullable: true
  })
  NOT?: PostShareScalarWhereInput[] | undefined;

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
}
