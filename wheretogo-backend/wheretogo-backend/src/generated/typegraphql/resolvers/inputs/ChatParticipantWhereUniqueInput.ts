import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { ChatParticipantUserIdRoomIdCompoundUniqueInput } from "../inputs/ChatParticipantUserIdRoomIdCompoundUniqueInput";
import { ChatParticipantWhereInput } from "../inputs/ChatParticipantWhereInput";
import { ChatRoomRelationFilter } from "../inputs/ChatRoomRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("ChatParticipantWhereUniqueInput", {})
export class ChatParticipantWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => ChatParticipantUserIdRoomIdCompoundUniqueInput, {
    nullable: true
  })
  userId_roomId?: ChatParticipantUserIdRoomIdCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [ChatParticipantWhereInput], {
    nullable: true
  })
  AND?: ChatParticipantWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatParticipantWhereInput], {
    nullable: true
  })
  OR?: ChatParticipantWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatParticipantWhereInput], {
    nullable: true
  })
  NOT?: ChatParticipantWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ChatRoomRelationFilter, {
    nullable: true
  })
  room?: ChatRoomRelationFilter | undefined;
}
