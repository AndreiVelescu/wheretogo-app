import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChatMessageReadOrderByWithAggregationInput } from "../../../inputs/ChatMessageReadOrderByWithAggregationInput";
import { ChatMessageReadScalarWhereWithAggregatesInput } from "../../../inputs/ChatMessageReadScalarWhereWithAggregatesInput";
import { ChatMessageReadWhereInput } from "../../../inputs/ChatMessageReadWhereInput";
import { ChatMessageReadScalarFieldEnum } from "../../../../enums/ChatMessageReadScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByChatMessageReadArgs {
  @TypeGraphQL.Field(_type => ChatMessageReadWhereInput, {
    nullable: true
  })
  where?: ChatMessageReadWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ChatMessageReadOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ChatMessageReadOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatMessageReadScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "userId" | "messageId" | "readAt">;

  @TypeGraphQL.Field(_type => ChatMessageReadScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ChatMessageReadScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
