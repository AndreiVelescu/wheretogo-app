import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("ChatMessageReadScalarWhereInput", {})
export class ChatMessageReadScalarWhereInput {
  @TypeGraphQL.Field(_type => [ChatMessageReadScalarWhereInput], {
    nullable: true
  })
  AND?: ChatMessageReadScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatMessageReadScalarWhereInput], {
    nullable: true
  })
  OR?: ChatMessageReadScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatMessageReadScalarWhereInput], {
    nullable: true
  })
  NOT?: ChatMessageReadScalarWhereInput[] | undefined;

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
  messageId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  readAt?: DateTimeFilter | undefined;
}
