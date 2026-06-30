import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessageCreateManyReplyToInput } from "../inputs/ChatMessageCreateManyReplyToInput";

@TypeGraphQL.InputType("ChatMessageCreateManyReplyToInputEnvelope", {})
export class ChatMessageCreateManyReplyToInputEnvelope {
  @TypeGraphQL.Field(_type => [ChatMessageCreateManyReplyToInput], {
    nullable: false
  })
  data!: ChatMessageCreateManyReplyToInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
