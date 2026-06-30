import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessageCreateManyReplyToInputEnvelope } from "../inputs/ChatMessageCreateManyReplyToInputEnvelope";
import { ChatMessageCreateOrConnectWithoutReplyToInput } from "../inputs/ChatMessageCreateOrConnectWithoutReplyToInput";
import { ChatMessageCreateWithoutReplyToInput } from "../inputs/ChatMessageCreateWithoutReplyToInput";
import { ChatMessageScalarWhereInput } from "../inputs/ChatMessageScalarWhereInput";
import { ChatMessageUpdateManyWithWhereWithoutReplyToInput } from "../inputs/ChatMessageUpdateManyWithWhereWithoutReplyToInput";
import { ChatMessageUpdateWithWhereUniqueWithoutReplyToInput } from "../inputs/ChatMessageUpdateWithWhereUniqueWithoutReplyToInput";
import { ChatMessageUpsertWithWhereUniqueWithoutReplyToInput } from "../inputs/ChatMessageUpsertWithWhereUniqueWithoutReplyToInput";
import { ChatMessageWhereUniqueInput } from "../inputs/ChatMessageWhereUniqueInput";

@TypeGraphQL.InputType("ChatMessageUpdateManyWithoutReplyToNestedInput", {})
export class ChatMessageUpdateManyWithoutReplyToNestedInput {
  @TypeGraphQL.Field(_type => [ChatMessageCreateWithoutReplyToInput], {
    nullable: true
  })
  create?: ChatMessageCreateWithoutReplyToInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatMessageCreateOrConnectWithoutReplyToInput], {
    nullable: true
  })
  connectOrCreate?: ChatMessageCreateOrConnectWithoutReplyToInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatMessageUpsertWithWhereUniqueWithoutReplyToInput], {
    nullable: true
  })
  upsert?: ChatMessageUpsertWithWhereUniqueWithoutReplyToInput[] | undefined;

  @TypeGraphQL.Field(_type => ChatMessageCreateManyReplyToInputEnvelope, {
    nullable: true
  })
  createMany?: ChatMessageCreateManyReplyToInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ChatMessageUpdateWithWhereUniqueWithoutReplyToInput], {
    nullable: true
  })
  update?: ChatMessageUpdateWithWhereUniqueWithoutReplyToInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatMessageUpdateManyWithWhereWithoutReplyToInput], {
    nullable: true
  })
  updateMany?: ChatMessageUpdateManyWithWhereWithoutReplyToInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatMessageScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ChatMessageScalarWhereInput[] | undefined;
}
