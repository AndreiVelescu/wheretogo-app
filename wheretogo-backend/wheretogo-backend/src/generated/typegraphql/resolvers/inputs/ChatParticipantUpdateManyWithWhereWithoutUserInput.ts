import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatParticipantScalarWhereInput } from "../inputs/ChatParticipantScalarWhereInput";
import { ChatParticipantUpdateManyMutationInput } from "../inputs/ChatParticipantUpdateManyMutationInput";

@TypeGraphQL.InputType("ChatParticipantUpdateManyWithWhereWithoutUserInput", {})
export class ChatParticipantUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => ChatParticipantScalarWhereInput, {
    nullable: false
  })
  where!: ChatParticipantScalarWhereInput;

  @TypeGraphQL.Field(_type => ChatParticipantUpdateManyMutationInput, {
    nullable: false
  })
  data!: ChatParticipantUpdateManyMutationInput;
}
