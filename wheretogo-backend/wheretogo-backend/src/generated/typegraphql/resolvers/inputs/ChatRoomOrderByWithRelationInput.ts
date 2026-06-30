import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessageOrderByRelationAggregateInput } from "../inputs/ChatMessageOrderByRelationAggregateInput";
import { ChatParticipantOrderByRelationAggregateInput } from "../inputs/ChatParticipantOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { TripOrderByWithRelationInput } from "../inputs/TripOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ChatRoomOrderByWithRelationInput", {})
export class ChatRoomOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  name?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  tripId?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  lastMessageAt?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TripOrderByWithRelationInput, {
    nullable: true
  })
  trip?: TripOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => ChatMessageOrderByRelationAggregateInput, {
    nullable: true
  })
  messages?: ChatMessageOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ChatParticipantOrderByRelationAggregateInput, {
    nullable: true
  })
  participants?: ChatParticipantOrderByRelationAggregateInput | undefined;
}
