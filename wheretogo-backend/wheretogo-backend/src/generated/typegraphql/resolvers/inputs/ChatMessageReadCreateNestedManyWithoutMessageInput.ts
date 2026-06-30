import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessageReadCreateManyMessageInputEnvelope } from "../inputs/ChatMessageReadCreateManyMessageInputEnvelope";
import { ChatMessageReadCreateOrConnectWithoutMessageInput } from "../inputs/ChatMessageReadCreateOrConnectWithoutMessageInput";
import { ChatMessageReadCreateWithoutMessageInput } from "../inputs/ChatMessageReadCreateWithoutMessageInput";
import { ChatMessageReadWhereUniqueInput } from "../inputs/ChatMessageReadWhereUniqueInput";

@TypeGraphQL.InputType("ChatMessageReadCreateNestedManyWithoutMessageInput", {})
export class ChatMessageReadCreateNestedManyWithoutMessageInput {
  @TypeGraphQL.Field(_type => [ChatMessageReadCreateWithoutMessageInput], {
    nullable: true
  })
  create?: ChatMessageReadCreateWithoutMessageInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatMessageReadCreateOrConnectWithoutMessageInput], {
    nullable: true
  })
  connectOrCreate?: ChatMessageReadCreateOrConnectWithoutMessageInput[] | undefined;

  @TypeGraphQL.Field(_type => ChatMessageReadCreateManyMessageInputEnvelope, {
    nullable: true
  })
  createMany?: ChatMessageReadCreateManyMessageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ChatMessageReadWhereUniqueInput], {
    nullable: true
  })
  connect?: ChatMessageReadWhereUniqueInput[] | undefined;
}
