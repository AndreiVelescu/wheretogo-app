import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessageCreateManyReplyToInputEnvelope } from "../inputs/ChatMessageCreateManyReplyToInputEnvelope";
import { ChatMessageCreateOrConnectWithoutReplyToInput } from "../inputs/ChatMessageCreateOrConnectWithoutReplyToInput";
import { ChatMessageCreateWithoutReplyToInput } from "../inputs/ChatMessageCreateWithoutReplyToInput";
import { ChatMessageWhereUniqueInput } from "../inputs/ChatMessageWhereUniqueInput";

@TypeGraphQL.InputType("ChatMessageCreateNestedManyWithoutReplyToInput", {})
export class ChatMessageCreateNestedManyWithoutReplyToInput {
  @TypeGraphQL.Field(_type => [ChatMessageCreateWithoutReplyToInput], {
    nullable: true
  })
  create?: ChatMessageCreateWithoutReplyToInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatMessageCreateOrConnectWithoutReplyToInput], {
    nullable: true
  })
  connectOrCreate?: ChatMessageCreateOrConnectWithoutReplyToInput[] | undefined;

  @TypeGraphQL.Field(_type => ChatMessageCreateManyReplyToInputEnvelope, {
    nullable: true
  })
  createMany?: ChatMessageCreateManyReplyToInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ChatMessageWhereUniqueInput], {
    nullable: true
  })
  connect?: ChatMessageWhereUniqueInput[] | undefined;
}
