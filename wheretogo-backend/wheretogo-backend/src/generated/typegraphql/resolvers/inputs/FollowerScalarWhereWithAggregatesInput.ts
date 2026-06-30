import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("FollowerScalarWhereWithAggregatesInput", {})
export class FollowerScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [FollowerScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: FollowerScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowerScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: FollowerScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowerScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: FollowerScalarWhereWithAggregatesInput[] | undefined;

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
  followerId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;
}
