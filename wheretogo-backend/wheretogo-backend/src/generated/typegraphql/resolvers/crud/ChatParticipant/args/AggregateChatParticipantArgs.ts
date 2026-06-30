import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChatParticipantOrderByWithRelationInput } from "../../../inputs/ChatParticipantOrderByWithRelationInput";
import { ChatParticipantWhereInput } from "../../../inputs/ChatParticipantWhereInput";
import { ChatParticipantWhereUniqueInput } from "../../../inputs/ChatParticipantWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateChatParticipantArgs {
  @TypeGraphQL.Field(_type => ChatParticipantWhereInput, {
    nullable: true
  })
  where?: ChatParticipantWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ChatParticipantOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ChatParticipantOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ChatParticipantWhereUniqueInput, {
    nullable: true
  })
  cursor?: ChatParticipantWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
