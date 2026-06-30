import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessageCreateManySenderInputEnvelope } from "../inputs/ChatMessageCreateManySenderInputEnvelope";
import { ChatMessageCreateOrConnectWithoutSenderInput } from "../inputs/ChatMessageCreateOrConnectWithoutSenderInput";
import { ChatMessageCreateWithoutSenderInput } from "../inputs/ChatMessageCreateWithoutSenderInput";
import { ChatMessageScalarWhereInput } from "../inputs/ChatMessageScalarWhereInput";
import { ChatMessageUpdateManyWithWhereWithoutSenderInput } from "../inputs/ChatMessageUpdateManyWithWhereWithoutSenderInput";
import { ChatMessageUpdateWithWhereUniqueWithoutSenderInput } from "../inputs/ChatMessageUpdateWithWhereUniqueWithoutSenderInput";
import { ChatMessageUpsertWithWhereUniqueWithoutSenderInput } from "../inputs/ChatMessageUpsertWithWhereUniqueWithoutSenderInput";
import { ChatMessageWhereUniqueInput } from "../inputs/ChatMessageWhereUniqueInput";

@TypeGraphQL.InputType("ChatMessageUpdateManyWithoutSenderNestedInput", {})
export class ChatMessageUpdateManyWithoutSenderNestedInput {
  @TypeGraphQL.Field(_type => [ChatMessageCreateWithoutSenderInput], {
    nullable: true
  })
  create?: ChatMessageCreateWithoutSenderInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatMessageCreateOrConnectWithoutSenderInput], {
    nullable: true
  })
  connectOrCreate?: ChatMessageCreateOrConnectWithoutSenderInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatMessageUpsertWithWhereUniqueWithoutSenderInput], {
    nullable: true
  })
  upsert?: ChatMessageUpsertWithWhereUniqueWithoutSenderInput[] | undefined;

  @TypeGraphQL.Field(_type => ChatMessageCreateManySenderInputEnvelope, {
    nullable: true
  })
  createMany?: ChatMessageCreateManySenderInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ChatMessageWhereUniqueInput], {
    nullable: true
  })
  set?: ChatMessageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatMessageWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ChatMessageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatMessageWhereUniqueInput], {
    nullable: true
  })
  delete?: ChatMessageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatMessageWhereUniqueInput], {
    nullable: true
  })
  connect?: ChatMessageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatMessageUpdateWithWhereUniqueWithoutSenderInput], {
    nullable: true
  })
  update?: ChatMessageUpdateWithWhereUniqueWithoutSenderInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatMessageUpdateManyWithWhereWithoutSenderInput], {
    nullable: true
  })
  updateMany?: ChatMessageUpdateManyWithWhereWithoutSenderInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatMessageScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ChatMessageScalarWhereInput[] | undefined;
}
