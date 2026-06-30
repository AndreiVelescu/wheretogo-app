import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChatMessageReadOrderByWithRelationInput } from "../../../inputs/ChatMessageReadOrderByWithRelationInput";
import { ChatMessageReadWhereInput } from "../../../inputs/ChatMessageReadWhereInput";
import { ChatMessageReadWhereUniqueInput } from "../../../inputs/ChatMessageReadWhereUniqueInput";
import { ChatMessageReadScalarFieldEnum } from "../../../../enums/ChatMessageReadScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class ChatMessageReadByArgs {
  @TypeGraphQL.Field(_type => ChatMessageReadWhereInput, {
    nullable: true
  })
  where?: ChatMessageReadWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ChatMessageReadOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ChatMessageReadOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ChatMessageReadWhereUniqueInput, {
    nullable: true
  })
  cursor?: ChatMessageReadWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ChatMessageReadScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "userId" | "messageId" | "readAt"> | undefined;
}
