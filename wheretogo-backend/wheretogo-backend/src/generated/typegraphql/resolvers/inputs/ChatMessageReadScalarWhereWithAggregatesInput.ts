import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("ChatMessageReadScalarWhereWithAggregatesInput", {})
export class ChatMessageReadScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ChatMessageReadScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ChatMessageReadScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatMessageReadScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ChatMessageReadScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatMessageReadScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ChatMessageReadScalarWhereWithAggregatesInput[] | undefined;

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
  messageId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  readAt?: DateTimeWithAggregatesFilter | undefined;
}
