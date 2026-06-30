import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessageReadUserIdMessageIdCompoundUniqueInput } from "../inputs/ChatMessageReadUserIdMessageIdCompoundUniqueInput";
import { ChatMessageReadWhereInput } from "../inputs/ChatMessageReadWhereInput";
import { ChatMessageRelationFilter } from "../inputs/ChatMessageRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("ChatMessageReadWhereUniqueInput", {})
export class ChatMessageReadWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => ChatMessageReadUserIdMessageIdCompoundUniqueInput, {
    nullable: true
  })
  userId_messageId?: ChatMessageReadUserIdMessageIdCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [ChatMessageReadWhereInput], {
    nullable: true
  })
  AND?: ChatMessageReadWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatMessageReadWhereInput], {
    nullable: true
  })
  OR?: ChatMessageReadWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatMessageReadWhereInput], {
    nullable: true
  })
  NOT?: ChatMessageReadWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ChatMessageRelationFilter, {
    nullable: true
  })
  message?: ChatMessageRelationFilter | undefined;
}
