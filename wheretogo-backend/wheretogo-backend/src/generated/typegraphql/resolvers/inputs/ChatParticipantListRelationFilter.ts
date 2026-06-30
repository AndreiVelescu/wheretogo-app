import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatParticipantWhereInput } from "../inputs/ChatParticipantWhereInput";

@TypeGraphQL.InputType("ChatParticipantListRelationFilter", {})
export class ChatParticipantListRelationFilter {
  @TypeGraphQL.Field(_type => ChatParticipantWhereInput, {
    nullable: true
  })
  every?: ChatParticipantWhereInput | undefined;

  @TypeGraphQL.Field(_type => ChatParticipantWhereInput, {
    nullable: true
  })
  some?: ChatParticipantWhereInput | undefined;

  @TypeGraphQL.Field(_type => ChatParticipantWhereInput, {
    nullable: true
  })
  none?: ChatParticipantWhereInput | undefined;
}
