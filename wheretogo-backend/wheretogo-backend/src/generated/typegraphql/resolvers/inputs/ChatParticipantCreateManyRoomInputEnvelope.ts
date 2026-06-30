import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatParticipantCreateManyRoomInput } from "../inputs/ChatParticipantCreateManyRoomInput";

@TypeGraphQL.InputType("ChatParticipantCreateManyRoomInputEnvelope", {})
export class ChatParticipantCreateManyRoomInputEnvelope {
  @TypeGraphQL.Field(_type => [ChatParticipantCreateManyRoomInput], {
    nullable: false
  })
  data!: ChatParticipantCreateManyRoomInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
