import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessageReadCreateManyMessageInputEnvelope } from "../inputs/ChatMessageReadCreateManyMessageInputEnvelope";
import { ChatMessageReadCreateOrConnectWithoutMessageInput } from "../inputs/ChatMessageReadCreateOrConnectWithoutMessageInput";
import { ChatMessageReadCreateWithoutMessageInput } from "../inputs/ChatMessageReadCreateWithoutMessageInput";
import { ChatMessageReadScalarWhereInput } from "../inputs/ChatMessageReadScalarWhereInput";
import { ChatMessageReadUpdateManyWithWhereWithoutMessageInput } from "../inputs/ChatMessageReadUpdateManyWithWhereWithoutMessageInput";
import { ChatMessageReadUpdateWithWhereUniqueWithoutMessageInput } from "../inputs/ChatMessageReadUpdateWithWhereUniqueWithoutMessageInput";
import { ChatMessageReadUpsertWithWhereUniqueWithoutMessageInput } from "../inputs/ChatMessageReadUpsertWithWhereUniqueWithoutMessageInput";
import { ChatMessageReadWhereUniqueInput } from "../inputs/ChatMessageReadWhereUniqueInput";

@TypeGraphQL.InputType("ChatMessageReadUpdateManyWithoutMessageNestedInput", {})
export class ChatMessageReadUpdateManyWithoutMessageNestedInput {
  @TypeGraphQL.Field(_type => [ChatMessageReadCreateWithoutMessageInput], {
    nullable: true
  })
  create?: ChatMessageReadCreateWithoutMessageInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatMessageReadCreateOrConnectWithoutMessageInput], {
    nullable: true
  })
  connectOrCreate?: ChatMessageReadCreateOrConnectWithoutMessageInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatMessageReadUpsertWithWhereUniqueWithoutMessageInput], {
    nullable: true
  })
  upsert?: ChatMessageReadUpsertWithWhereUniqueWithoutMessageInput[] | undefined;

  @TypeGraphQL.Field(_type => ChatMessageReadCreateManyMessageInputEnvelope, {
    nullable: true
  })
  createMany?: ChatMessageReadCreateManyMessageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ChatMessageReadWhereUniqueInput], {
    nullable: true
  })
  set?: ChatMessageReadWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatMessageReadWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ChatMessageReadWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatMessageReadWhereUniqueInput], {
    nullable: true
  })
  delete?: ChatMessageReadWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatMessageReadWhereUniqueInput], {
    nullable: true
  })
  connect?: ChatMessageReadWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatMessageReadUpdateWithWhereUniqueWithoutMessageInput], {
    nullable: true
  })
  update?: ChatMessageReadUpdateWithWhereUniqueWithoutMessageInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatMessageReadUpdateManyWithWhereWithoutMessageInput], {
    nullable: true
  })
  updateMany?: ChatMessageReadUpdateManyWithWhereWithoutMessageInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatMessageReadScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ChatMessageReadScalarWhereInput[] | undefined;
}
