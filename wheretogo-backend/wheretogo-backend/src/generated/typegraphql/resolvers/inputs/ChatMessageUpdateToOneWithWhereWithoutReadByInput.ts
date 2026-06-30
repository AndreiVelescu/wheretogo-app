import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessageUpdateWithoutReadByInput } from "../inputs/ChatMessageUpdateWithoutReadByInput";
import { ChatMessageWhereInput } from "../inputs/ChatMessageWhereInput";

@TypeGraphQL.InputType("ChatMessageUpdateToOneWithWhereWithoutReadByInput", {})
export class ChatMessageUpdateToOneWithWhereWithoutReadByInput {
  @TypeGraphQL.Field(_type => ChatMessageWhereInput, {
    nullable: true
  })
  where?: ChatMessageWhereInput | undefined;

  @TypeGraphQL.Field(_type => ChatMessageUpdateWithoutReadByInput, {
    nullable: false
  })
  data!: ChatMessageUpdateWithoutReadByInput;
}
