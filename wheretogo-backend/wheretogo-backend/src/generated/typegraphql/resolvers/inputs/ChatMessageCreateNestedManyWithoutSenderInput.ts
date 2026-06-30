import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessageCreateManySenderInputEnvelope } from "../inputs/ChatMessageCreateManySenderInputEnvelope";
import { ChatMessageCreateOrConnectWithoutSenderInput } from "../inputs/ChatMessageCreateOrConnectWithoutSenderInput";
import { ChatMessageCreateWithoutSenderInput } from "../inputs/ChatMessageCreateWithoutSenderInput";
import { ChatMessageWhereUniqueInput } from "../inputs/ChatMessageWhereUniqueInput";

@TypeGraphQL.InputType("ChatMessageCreateNestedManyWithoutSenderInput", {})
export class ChatMessageCreateNestedManyWithoutSenderInput {
  @TypeGraphQL.Field(_type => [ChatMessageCreateWithoutSenderInput], {
    nullable: true
  })
  create?: ChatMessageCreateWithoutSenderInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatMessageCreateOrConnectWithoutSenderInput], {
    nullable: true
  })
  connectOrCreate?: ChatMessageCreateOrConnectWithoutSenderInput[] | undefined;

  @TypeGraphQL.Field(_type => ChatMessageCreateManySenderInputEnvelope, {
    nullable: true
  })
  createMany?: ChatMessageCreateManySenderInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ChatMessageWhereUniqueInput], {
    nullable: true
  })
  connect?: ChatMessageWhereUniqueInput[] | undefined;
}
