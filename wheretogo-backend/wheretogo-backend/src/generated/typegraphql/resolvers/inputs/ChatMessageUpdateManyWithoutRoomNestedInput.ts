import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessageCreateManyRoomInputEnvelope } from "../inputs/ChatMessageCreateManyRoomInputEnvelope";
import { ChatMessageCreateOrConnectWithoutRoomInput } from "../inputs/ChatMessageCreateOrConnectWithoutRoomInput";
import { ChatMessageCreateWithoutRoomInput } from "../inputs/ChatMessageCreateWithoutRoomInput";
import { ChatMessageScalarWhereInput } from "../inputs/ChatMessageScalarWhereInput";
import { ChatMessageUpdateManyWithWhereWithoutRoomInput } from "../inputs/ChatMessageUpdateManyWithWhereWithoutRoomInput";
import { ChatMessageUpdateWithWhereUniqueWithoutRoomInput } from "../inputs/ChatMessageUpdateWithWhereUniqueWithoutRoomInput";
import { ChatMessageUpsertWithWhereUniqueWithoutRoomInput } from "../inputs/ChatMessageUpsertWithWhereUniqueWithoutRoomInput";
import { ChatMessageWhereUniqueInput } from "../inputs/ChatMessageWhereUniqueInput";

@TypeGraphQL.InputType("ChatMessageUpdateManyWithoutRoomNestedInput", {})
export class ChatMessageUpdateManyWithoutRoomNestedInput {
  @TypeGraphQL.Field(_type => [ChatMessageCreateWithoutRoomInput], {
    nullable: true
  })
  create?: ChatMessageCreateWithoutRoomInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatMessageCreateOrConnectWithoutRoomInput], {
    nullable: true
  })
  connectOrCreate?: ChatMessageCreateOrConnectWithoutRoomInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatMessageUpsertWithWhereUniqueWithoutRoomInput], {
    nullable: true
  })
  upsert?: ChatMessageUpsertWithWhereUniqueWithoutRoomInput[] | undefined;

  @TypeGraphQL.Field(_type => ChatMessageCreateManyRoomInputEnvelope, {
    nullable: true
  })
  createMany?: ChatMessageCreateManyRoomInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ChatMessageUpdateWithWhereUniqueWithoutRoomInput], {
    nullable: true
  })
  update?: ChatMessageUpdateWithWhereUniqueWithoutRoomInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatMessageUpdateManyWithWhereWithoutRoomInput], {
    nullable: true
  })
  updateMany?: ChatMessageUpdateManyWithWhereWithoutRoomInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatMessageScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ChatMessageScalarWhereInput[] | undefined;
}
