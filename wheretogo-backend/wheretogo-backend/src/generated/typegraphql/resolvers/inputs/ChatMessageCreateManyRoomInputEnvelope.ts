import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessageCreateManyRoomInput } from "../inputs/ChatMessageCreateManyRoomInput";

@TypeGraphQL.InputType("ChatMessageCreateManyRoomInputEnvelope", {})
export class ChatMessageCreateManyRoomInputEnvelope {
  @TypeGraphQL.Field(_type => [ChatMessageCreateManyRoomInput], {
    nullable: false
  })
  data!: ChatMessageCreateManyRoomInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
