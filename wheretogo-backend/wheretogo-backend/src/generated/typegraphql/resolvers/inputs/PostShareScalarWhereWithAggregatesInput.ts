import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumSharePlatformNullableWithAggregatesFilter } from "../inputs/EnumSharePlatformNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("PostShareScalarWhereWithAggregatesInput", {})
export class PostShareScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PostShareScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PostShareScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostShareScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PostShareScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostShareScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PostShareScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  userId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  postId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumSharePlatformNullableWithAggregatesFilter, {
    nullable: true
  })
  platform?: EnumSharePlatformNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;
}
