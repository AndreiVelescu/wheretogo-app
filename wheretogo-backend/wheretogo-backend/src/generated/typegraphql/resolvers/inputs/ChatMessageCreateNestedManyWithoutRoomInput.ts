import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessageCreateManyRoomInputEnvelope } from "../inputs/ChatMessageCreateManyRoomInputEnvelope";
import { ChatMessageCreateOrConnectWithoutRoomInput } from "../inputs/ChatMessageCreateOrConnectWithoutRoomInput";
import { ChatMessageCreateWithoutRoomInput } from "../inputs/ChatMessageCreateWithoutRoomInput";
import { ChatMessageWhereUniqueInput } from "../inputs/ChatMessageWhereUniqueInput";

@TypeGraphQL.InputType("ChatMessageCreateNestedManyWithoutRoomInput", {})
export class ChatMessageCreateNestedManyWithoutRoomInput {
  @TypeGraphQL.Field(_type => [ChatMessageCreateWithoutRoomInput], {
    nullable: true
  })
  create?: ChatMessageCreateWithoutRoomInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatMessageCreateOrConnectWithoutRoomInput], {
    nullable: true
  })
  connectOrCreate?: ChatMessageCreateOrConnectWithoutRoomInput[] | undefined;

  @TypeGraphQL.Field(_type => ChatMessageCreateManyRoomInputEnvelope, {
    nullable: true
  })
  createMany?: ChatMessageCreateManyRoomInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ChatMessageWhereUniqueInput], {
    nullable: true
  })
  connect?: ChatMessageWhereUniqueInput[] | undefined;
}
