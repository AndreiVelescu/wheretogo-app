import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatParticipantUpdateWithoutUserInput } from "../inputs/ChatParticipantUpdateWithoutUserInput";
import { ChatParticipantWhereUniqueInput } from "../inputs/ChatParticipantWhereUniqueInput";

@TypeGraphQL.InputType("ChatParticipantUpdateWithWhereUniqueWithoutUserInput", {})
export class ChatParticipantUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ChatParticipantWhereUniqueInput, {
    nullable: false
  })
  where!: ChatParticipantWhereUniqueInput;

  @TypeGraphQL.Field(_type => ChatParticipantUpdateWithoutUserInput, {
    nullable: false
  })
  data!: ChatParticipantUpdateWithoutUserInput;
}
