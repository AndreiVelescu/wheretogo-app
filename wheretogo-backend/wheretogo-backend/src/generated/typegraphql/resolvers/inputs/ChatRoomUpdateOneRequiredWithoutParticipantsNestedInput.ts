import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatRoomCreateOrConnectWithoutParticipantsInput } from "../inputs/ChatRoomCreateOrConnectWithoutParticipantsInput";
import { ChatRoomCreateWithoutParticipantsInput } from "../inputs/ChatRoomCreateWithoutParticipantsInput";
import { ChatRoomUpdateToOneWithWhereWithoutParticipantsInput } from "../inputs/ChatRoomUpdateToOneWithWhereWithoutParticipantsInput";
import { ChatRoomUpsertWithoutParticipantsInput } from "../inputs/ChatRoomUpsertWithoutParticipantsInput";
import { ChatRoomWhereUniqueInput } from "../inputs/ChatRoomWhereUniqueInput";

@TypeGraphQL.InputType("ChatRoomUpdateOneRequiredWithoutParticipantsNestedInput", {})
export class ChatRoomUpdateOneRequiredWithoutParticipantsNestedInput {
  @TypeGraphQL.Field(_type => ChatRoomCreateWithoutParticipantsInput, {
    nullable: true
  })
  create?: ChatRoomCreateWithoutParticipantsInput | undefined;

  @TypeGraphQL.Field(_type => ChatRoomCreateOrConnectWithoutParticipantsInput, {
    nullable: true
  })
  connectOrCreate?: ChatRoomCreateOrConnectWithoutParticipantsInput | undefined;

  @TypeGraphQL.Field(_type => ChatRoomUpsertWithoutParticipantsInput, {
    nullable: true
  })
  upsert?: ChatRoomUpsertWithoutParticipantsInput | undefined;

  @TypeGraphQL.Field(_type => ChatRoomWhereUniqueInput, {
    nullable: true
  })
  connect?: ChatRoomWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ChatRoomUpdateToOneWithWhereWithoutParticipantsInput, {
    nullable: true
  })
  update?: ChatRoomUpdateToOneWithWhereWithoutParticipantsInput | undefined;
}
