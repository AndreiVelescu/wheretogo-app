import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChatRoomOrderByWithRelationInput } from "../../../inputs/ChatRoomOrderByWithRelationInput";
import { ChatRoomWhereInput } from "../../../inputs/ChatRoomWhereInput";
import { ChatRoomWhereUniqueInput } from "../../../inputs/ChatRoomWhereUniqueInput";
import { ChatRoomScalarFieldEnum } from "../../../../enums/ChatRoomScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstChatRoomOrThrowArgs {
  @TypeGraphQL.Field(_type => ChatRoomWhereInput, {
    nullable: true
  })
  where?: ChatRoomWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ChatRoomOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ChatRoomOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ChatRoomWhereUniqueInput, {
    nullable: true
  })
  cursor?: ChatRoomWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ChatRoomScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "type" | "name" | "tripId" | "lastMessageAt" | "createdAt" | "updatedAt"> | undefined;
}
