import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChatMessageOrderByWithAggregationInput } from "../../../inputs/ChatMessageOrderByWithAggregationInput";
import { ChatMessageScalarWhereWithAggregatesInput } from "../../../inputs/ChatMessageScalarWhereWithAggregatesInput";
import { ChatMessageWhereInput } from "../../../inputs/ChatMessageWhereInput";
import { ChatMessageScalarFieldEnum } from "../../../../enums/ChatMessageScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByChatMessageArgs {
  @TypeGraphQL.Field(_type => ChatMessageWhereInput, {
    nullable: true
  })
  where?: ChatMessageWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ChatMessageOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ChatMessageOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatMessageScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "content" | "type" | "senderId" | "roomId" | "replyToId" | "createdAt" | "updatedAt" | "editedAt" | "deletedAt">;

  @TypeGraphQL.Field(_type => ChatMessageScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ChatMessageScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
