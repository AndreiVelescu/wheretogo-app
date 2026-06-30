import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCreateWithoutChatRoomInput } from "../inputs/TripCreateWithoutChatRoomInput";
import { TripUpdateWithoutChatRoomInput } from "../inputs/TripUpdateWithoutChatRoomInput";
import { TripWhereInput } from "../inputs/TripWhereInput";

@TypeGraphQL.InputType("TripUpsertWithoutChatRoomInput", {})
export class TripUpsertWithoutChatRoomInput {
  @TypeGraphQL.Field(_type => TripUpdateWithoutChatRoomInput, {
    nullable: false
  })
  update!: TripUpdateWithoutChatRoomInput;

  @TypeGraphQL.Field(_type => TripCreateWithoutChatRoomInput, {
    nullable: false
  })
  create!: TripCreateWithoutChatRoomInput;

  @TypeGraphQL.Field(_type => TripWhereInput, {
    nullable: true
  })
  where?: TripWhereInput | undefined;
}
