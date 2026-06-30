import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatRoomUpdateWithoutTripInput } from "../inputs/ChatRoomUpdateWithoutTripInput";
import { ChatRoomWhereInput } from "../inputs/ChatRoomWhereInput";

@TypeGraphQL.InputType("ChatRoomUpdateToOneWithWhereWithoutTripInput", {})
export class ChatRoomUpdateToOneWithWhereWithoutTripInput {
  @TypeGraphQL.Field(_type => ChatRoomWhereInput, {
    nullable: true
  })
  where?: ChatRoomWhereInput | undefined;

  @TypeGraphQL.Field(_type => ChatRoomUpdateWithoutTripInput, {
    nullable: false
  })
  data!: ChatRoomUpdateWithoutTripInput;
}
