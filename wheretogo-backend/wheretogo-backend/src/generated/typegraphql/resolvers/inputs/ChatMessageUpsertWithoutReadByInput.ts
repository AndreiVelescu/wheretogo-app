import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessageCreateWithoutReadByInput } from "../inputs/ChatMessageCreateWithoutReadByInput";
import { ChatMessageUpdateWithoutReadByInput } from "../inputs/ChatMessageUpdateWithoutReadByInput";
import { ChatMessageWhereInput } from "../inputs/ChatMessageWhereInput";

@TypeGraphQL.InputType("ChatMessageUpsertWithoutReadByInput", {})
export class ChatMessageUpsertWithoutReadByInput {
  @TypeGraphQL.Field(_type => ChatMessageUpdateWithoutReadByInput, {
    nullable: false
  })
  update!: ChatMessageUpdateWithoutReadByInput;

  @TypeGraphQL.Field(_type => ChatMessageCreateWithoutReadByInput, {
    nullable: false
  })
  create!: ChatMessageCreateWithoutReadByInput;

  @TypeGraphQL.Field(_type => ChatMessageWhereInput, {
    nullable: true
  })
  where?: ChatMessageWhereInput | undefined;
}
