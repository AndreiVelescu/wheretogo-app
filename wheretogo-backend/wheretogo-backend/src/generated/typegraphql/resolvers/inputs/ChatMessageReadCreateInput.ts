import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessageCreateNestedOneWithoutReadByInput } from "../inputs/ChatMessageCreateNestedOneWithoutReadByInput";
import { UserCreateNestedOneWithoutMessageReadsInput } from "../inputs/UserCreateNestedOneWithoutMessageReadsInput";

@TypeGraphQL.InputType("ChatMessageReadCreateInput", {})
export class ChatMessageReadCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  readAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutMessageReadsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutMessageReadsInput;

  @TypeGraphQL.Field(_type => ChatMessageCreateNestedOneWithoutReadByInput, {
    nullable: false
  })
  message!: ChatMessageCreateNestedOneWithoutReadByInput;
}
