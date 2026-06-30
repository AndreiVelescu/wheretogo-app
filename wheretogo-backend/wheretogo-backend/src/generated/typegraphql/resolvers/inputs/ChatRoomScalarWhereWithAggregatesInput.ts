import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumChatRoomTypeWithAggregatesFilter } from "../inputs/EnumChatRoomTypeWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("ChatRoomScalarWhereWithAggregatesInput", {})
export class ChatRoomScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ChatRoomScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ChatRoomScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatRoomScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ChatRoomScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatRoomScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ChatRoomScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumChatRoomTypeWithAggregatesFilter, {
    nullable: true
  })
  type?: EnumChatRoomTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  name?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  tripId?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  lastMessageAt?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
