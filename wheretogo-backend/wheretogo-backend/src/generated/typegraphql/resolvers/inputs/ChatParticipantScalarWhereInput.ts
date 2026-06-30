import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("ChatParticipantScalarWhereInput", {})
export class ChatParticipantScalarWhereInput {
  @TypeGraphQL.Field(_type => [ChatParticipantScalarWhereInput], {
    nullable: true
  })
  AND?: ChatParticipantScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatParticipantScalarWhereInput], {
    nullable: true
  })
  OR?: ChatParticipantScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatParticipantScalarWhereInput], {
    nullable: true
  })
  NOT?: ChatParticipantScalarWhereInput[] | undefined;

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
  roomId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  lastReadAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  joinedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  leftAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  isAdmin?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  canWrite?: BoolFilter | undefined;
}
