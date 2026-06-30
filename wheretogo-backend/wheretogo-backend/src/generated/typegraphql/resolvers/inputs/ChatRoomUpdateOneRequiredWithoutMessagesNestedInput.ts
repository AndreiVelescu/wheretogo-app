import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatRoomCreateOrConnectWithoutMessagesInput } from "../inputs/ChatRoomCreateOrConnectWithoutMessagesInput";
import { ChatRoomCreateWithoutMessagesInput } from "../inputs/ChatRoomCreateWithoutMessagesInput";
import { ChatRoomUpdateToOneWithWhereWithoutMessagesInput } from "../inputs/ChatRoomUpdateToOneWithWhereWithoutMessagesInput";
import { ChatRoomUpsertWithoutMessagesInput } from "../inputs/ChatRoomUpsertWithoutMessagesInput";
import { ChatRoomWhereUniqueInput } from "../inputs/ChatRoomWhereUniqueInput";

@TypeGraphQL.InputType("ChatRoomUpdateOneRequiredWithoutMessagesNestedInput", {})
export class ChatRoomUpdateOneRequiredWithoutMessagesNestedInput {
  @TypeGraphQL.Field(_type => ChatRoomCreateWithoutMessagesInput, {
    nullable: true
  })
  create?: ChatRoomCreateWithoutMessagesInput | undefined;

  @TypeGraphQL.Field(_type => ChatRoomCreateOrConnectWithoutMessagesInput, {
    nullable: true
  })
  connectOrCreate?: ChatRoomCreateOrConnectWithoutMessagesInput | undefined;

  @TypeGraphQL.Field(_type => ChatRoomUpsertWithoutMessagesInput, {
    nullable: true
  })
  upsert?: ChatRoomUpsertWithoutMessagesInput | undefined;

  @TypeGraphQL.Field(_type => ChatRoomWhereUniqueInput, {
    nullable: true
  })
  connect?: ChatRoomWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ChatRoomUpdateToOneWithWhereWithoutMessagesInput, {
    nullable: true
  })
  update?: ChatRoomUpdateToOneWithWhereWithoutMessagesInput | undefined;
}
