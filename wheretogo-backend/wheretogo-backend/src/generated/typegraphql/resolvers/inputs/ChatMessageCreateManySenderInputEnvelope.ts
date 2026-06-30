import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessageCreateManySenderInput } from "../inputs/ChatMessageCreateManySenderInput";

@TypeGraphQL.InputType("ChatMessageCreateManySenderInputEnvelope", {})
export class ChatMessageCreateManySenderInputEnvelope {
  @TypeGraphQL.Field(_type => [ChatMessageCreateManySenderInput], {
    nullable: false
  })
  data!: ChatMessageCreateManySenderInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
