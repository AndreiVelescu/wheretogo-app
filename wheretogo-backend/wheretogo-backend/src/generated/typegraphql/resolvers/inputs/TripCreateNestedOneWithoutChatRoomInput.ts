import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCreateOrConnectWithoutChatRoomInput } from "../inputs/TripCreateOrConnectWithoutChatRoomInput";
import { TripCreateWithoutChatRoomInput } from "../inputs/TripCreateWithoutChatRoomInput";
import { TripWhereUniqueInput } from "../inputs/TripWhereUniqueInput";

@TypeGraphQL.InputType("TripCreateNestedOneWithoutChatRoomInput", {})
export class TripCreateNestedOneWithoutChatRoomInput {
  @TypeGraphQL.Field(_type => TripCreateWithoutChatRoomInput, {
    nullable: true
  })
  create?: TripCreateWithoutChatRoomInput | undefined;

  @TypeGraphQL.Field(_type => TripCreateOrConnectWithoutChatRoomInput, {
    nullable: true
  })
  connectOrCreate?: TripCreateOrConnectWithoutChatRoomInput | undefined;

  @TypeGraphQL.Field(_type => TripWhereUniqueInput, {
    nullable: true
  })
  connect?: TripWhereUniqueInput | undefined;
}
