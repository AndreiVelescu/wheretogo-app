import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatRoomCreateOrConnectWithoutTripInput } from "../inputs/ChatRoomCreateOrConnectWithoutTripInput";
import { ChatRoomCreateWithoutTripInput } from "../inputs/ChatRoomCreateWithoutTripInput";
import { ChatRoomWhereUniqueInput } from "../inputs/ChatRoomWhereUniqueInput";

@TypeGraphQL.InputType("ChatRoomCreateNestedOneWithoutTripInput", {})
export class ChatRoomCreateNestedOneWithoutTripInput {
  @TypeGraphQL.Field(_type => ChatRoomCreateWithoutTripInput, {
    nullable: true
  })
  create?: ChatRoomCreateWithoutTripInput | undefined;

  @TypeGraphQL.Field(_type => ChatRoomCreateOrConnectWithoutTripInput, {
    nullable: true
  })
  connectOrCreate?: ChatRoomCreateOrConnectWithoutTripInput | undefined;

  @TypeGraphQL.Field(_type => ChatRoomWhereUniqueInput, {
    nullable: true
  })
  connect?: ChatRoomWhereUniqueInput | undefined;
}
