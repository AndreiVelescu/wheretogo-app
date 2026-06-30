import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChatParticipantOrderByWithAggregationInput } from "../../../inputs/ChatParticipantOrderByWithAggregationInput";
import { ChatParticipantScalarWhereWithAggregatesInput } from "../../../inputs/ChatParticipantScalarWhereWithAggregatesInput";
import { ChatParticipantWhereInput } from "../../../inputs/ChatParticipantWhereInput";
import { ChatParticipantScalarFieldEnum } from "../../../../enums/ChatParticipantScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByChatParticipantArgs {
  @TypeGraphQL.Field(_type => ChatParticipantWhereInput, {
    nullable: true
  })
  where?: ChatParticipantWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ChatParticipantOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ChatParticipantOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatParticipantScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "userId" | "roomId" | "lastReadAt" | "joinedAt" | "leftAt" | "isAdmin" | "canWrite">;

  @TypeGraphQL.Field(_type => ChatParticipantScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ChatParticipantScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
