import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripUpdateWithoutChatRoomInput } from "../inputs/TripUpdateWithoutChatRoomInput";
import { TripWhereInput } from "../inputs/TripWhereInput";

@TypeGraphQL.InputType("TripUpdateToOneWithWhereWithoutChatRoomInput", {})
export class TripUpdateToOneWithWhereWithoutChatRoomInput {
  @TypeGraphQL.Field(_type => TripWhereInput, {
    nullable: true
  })
  where?: TripWhereInput | undefined;

  @TypeGraphQL.Field(_type => TripUpdateWithoutChatRoomInput, {
    nullable: false
  })
  data!: TripUpdateWithoutChatRoomInput;
}
