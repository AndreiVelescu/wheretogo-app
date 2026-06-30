import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatRoomCreateWithoutTripInput } from "../inputs/ChatRoomCreateWithoutTripInput";
import { ChatRoomWhereUniqueInput } from "../inputs/ChatRoomWhereUniqueInput";

@TypeGraphQL.InputType("ChatRoomCreateOrConnectWithoutTripInput", {})
export class ChatRoomCreateOrConnectWithoutTripInput {
  @TypeGraphQL.Field(_type => ChatRoomWhereUniqueInput, {
    nullable: false
  })
  where!: ChatRoomWhereUniqueInput;

  @TypeGraphQL.Field(_type => ChatRoomCreateWithoutTripInput, {
    nullable: false
  })
  create!: ChatRoomCreateWithoutTripInput;
}
