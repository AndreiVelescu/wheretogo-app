import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatRoomCreateOrConnectWithoutTripInput } from "../inputs/ChatRoomCreateOrConnectWithoutTripInput";
import { ChatRoomCreateWithoutTripInput } from "../inputs/ChatRoomCreateWithoutTripInput";
import { ChatRoomUpdateToOneWithWhereWithoutTripInput } from "../inputs/ChatRoomUpdateToOneWithWhereWithoutTripInput";
import { ChatRoomUpsertWithoutTripInput } from "../inputs/ChatRoomUpsertWithoutTripInput";
import { ChatRoomWhereInput } from "../inputs/ChatRoomWhereInput";
import { ChatRoomWhereUniqueInput } from "../inputs/ChatRoomWhereUniqueInput";

@TypeGraphQL.InputType("ChatRoomUpdateOneWithoutTripNestedInput", {})
export class ChatRoomUpdateOneWithoutTripNestedInput {
  @TypeGraphQL.Field(_type => ChatRoomCreateWithoutTripInput, {
    nullable: true
  })
  create?: ChatRoomCreateWithoutTripInput | undefined;

  @TypeGraphQL.Field(_type => ChatRoomCreateOrConnectWithoutTripInput, {
    nullable: true
  })
  connectOrCreate?: ChatRoomCreateOrConnectWithoutTripInput | undefined;

  @TypeGraphQL.Field(_type => ChatRoomUpsertWithoutTripInput, {
    nullable: true
  })
  upsert?: ChatRoomUpsertWithoutTripInput | undefined;

  @TypeGraphQL.Field(_type => ChatRoomWhereInput, {
    nullable: true
  })
  disconnect?: ChatRoomWhereInput | undefined;

  @TypeGraphQL.Field(_type => ChatRoomWhereInput, {
    nullable: true
  })
  delete?: ChatRoomWhereInput | undefined;

  @TypeGraphQL.Field(_type => ChatRoomWhereUniqueInput, {
    nullable: true
  })
  connect?: ChatRoomWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ChatRoomUpdateToOneWithWhereWithoutTripInput, {
    nullable: true
  })
  update?: ChatRoomUpdateToOneWithWhereWithoutTripInput | undefined;
}
