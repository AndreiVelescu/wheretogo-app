import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatRoomCreateWithoutTripInput } from "../inputs/ChatRoomCreateWithoutTripInput";
import { ChatRoomUpdateWithoutTripInput } from "../inputs/ChatRoomUpdateWithoutTripInput";
import { ChatRoomWhereInput } from "../inputs/ChatRoomWhereInput";

@TypeGraphQL.InputType("ChatRoomUpsertWithoutTripInput", {})
export class ChatRoomUpsertWithoutTripInput {
  @TypeGraphQL.Field(_type => ChatRoomUpdateWithoutTripInput, {
    nullable: false
  })
  update!: ChatRoomUpdateWithoutTripInput;

  @TypeGraphQL.Field(_type => ChatRoomCreateWithoutTripInput, {
    nullable: false
  })
  create!: ChatRoomCreateWithoutTripInput;

  @TypeGraphQL.Field(_type => ChatRoomWhereInput, {
    nullable: true
  })
  where?: ChatRoomWhereInput | undefined;
}
