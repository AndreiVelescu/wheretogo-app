import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessageCreateWithoutReadByInput } from "../inputs/ChatMessageCreateWithoutReadByInput";
import { ChatMessageWhereUniqueInput } from "../inputs/ChatMessageWhereUniqueInput";

@TypeGraphQL.InputType("ChatMessageCreateOrConnectWithoutReadByInput", {})
export class ChatMessageCreateOrConnectWithoutReadByInput {
  @TypeGraphQL.Field(_type => ChatMessageWhereUniqueInput, {
    nullable: false
  })
  where!: ChatMessageWhereUniqueInput;

  @TypeGraphQL.Field(_type => ChatMessageCreateWithoutReadByInput, {
    nullable: false
  })
  create!: ChatMessageCreateWithoutReadByInput;
}
