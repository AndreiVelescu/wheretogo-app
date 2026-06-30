import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessageReadCreateManyUserInputEnvelope } from "../inputs/ChatMessageReadCreateManyUserInputEnvelope";
import { ChatMessageReadCreateOrConnectWithoutUserInput } from "../inputs/ChatMessageReadCreateOrConnectWithoutUserInput";
import { ChatMessageReadCreateWithoutUserInput } from "../inputs/ChatMessageReadCreateWithoutUserInput";
import { ChatMessageReadWhereUniqueInput } from "../inputs/ChatMessageReadWhereUniqueInput";

@TypeGraphQL.InputType("ChatMessageReadCreateNestedManyWithoutUserInput", {})
export class ChatMessageReadCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [ChatMessageReadCreateWithoutUserInput], {
    nullable: true
  })
  create?: ChatMessageReadCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatMessageReadCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ChatMessageReadCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ChatMessageReadCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ChatMessageReadCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ChatMessageReadWhereUniqueInput], {
    nullable: true
  })
  connect?: ChatMessageReadWhereUniqueInput[] | undefined;
}
