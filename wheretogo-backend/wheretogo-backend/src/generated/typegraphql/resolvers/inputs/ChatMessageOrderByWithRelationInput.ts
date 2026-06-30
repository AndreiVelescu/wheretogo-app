import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessageOrderByRelationAggregateInput } from "../inputs/ChatMessageOrderByRelationAggregateInput";
import { ChatMessageReadOrderByRelationAggregateInput } from "../inputs/ChatMessageReadOrderByRelationAggregateInput";
import { ChatRoomOrderByWithRelationInput } from "../inputs/ChatRoomOrderByWithRelationInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ChatMessageOrderByWithRelationInput", {})
export class ChatMessageOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  content?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  senderId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  roomId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  replyToId?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  editedAt?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  deletedAt?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => UserOrderByWithRelationInput, {
    nullable: true
  })
  sender?: UserOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => ChatRoomOrderByWithRelationInput, {
    nullable: true
  })
  room?: ChatRoomOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => ChatMessageOrderByWithRelationInput, {
    nullable: true
  })
  replyTo?: ChatMessageOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => ChatMessageOrderByRelationAggregateInput, {
    nullable: true
  })
  replies?: ChatMessageOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ChatMessageReadOrderByRelationAggregateInput, {
    nullable: true
  })
  readBy?: ChatMessageReadOrderByRelationAggregateInput | undefined;
}
