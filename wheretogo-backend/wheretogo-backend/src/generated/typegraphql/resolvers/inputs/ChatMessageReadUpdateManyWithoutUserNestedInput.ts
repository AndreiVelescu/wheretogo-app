import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessageReadCreateManyUserInputEnvelope } from "../inputs/ChatMessageReadCreateManyUserInputEnvelope";
import { ChatMessageReadCreateOrConnectWithoutUserInput } from "../inputs/ChatMessageReadCreateOrConnectWithoutUserInput";
import { ChatMessageReadCreateWithoutUserInput } from "../inputs/ChatMessageReadCreateWithoutUserInput";
import { ChatMessageReadScalarWhereInput } from "../inputs/ChatMessageReadScalarWhereInput";
import { ChatMessageReadUpdateManyWithWhereWithoutUserInput } from "../inputs/ChatMessageReadUpdateManyWithWhereWithoutUserInput";
import { ChatMessageReadUpdateWithWhereUniqueWithoutUserInput } from "../inputs/ChatMessageReadUpdateWithWhereUniqueWithoutUserInput";
import { ChatMessageReadUpsertWithWhereUniqueWithoutUserInput } from "../inputs/ChatMessageReadUpsertWithWhereUniqueWithoutUserInput";
import { ChatMessageReadWhereUniqueInput } from "../inputs/ChatMessageReadWhereUniqueInput";

@TypeGraphQL.InputType("ChatMessageReadUpdateManyWithoutUserNestedInput", {})
export class ChatMessageReadUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [ChatMessageReadCreateWithoutUserInput], {
    nullable: true
  })
  create?: ChatMessageReadCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatMessageReadCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ChatMessageReadCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatMessageReadUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: ChatMessageReadUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ChatMessageReadCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ChatMessageReadCreateManyUserInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ChatMessageReadUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: ChatMessageReadUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatMessageReadUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: ChatMessageReadUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatMessageReadScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ChatMessageReadScalarWhereInput[] | undefined;
}
