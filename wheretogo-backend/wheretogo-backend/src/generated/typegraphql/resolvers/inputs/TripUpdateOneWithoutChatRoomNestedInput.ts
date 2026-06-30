import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCreateOrConnectWithoutChatRoomInput } from "../inputs/TripCreateOrConnectWithoutChatRoomInput";
import { TripCreateWithoutChatRoomInput } from "../inputs/TripCreateWithoutChatRoomInput";
import { TripUpdateToOneWithWhereWithoutChatRoomInput } from "../inputs/TripUpdateToOneWithWhereWithoutChatRoomInput";
import { TripUpsertWithoutChatRoomInput } from "../inputs/TripUpsertWithoutChatRoomInput";
import { TripWhereInput } from "../inputs/TripWhereInput";
import { TripWhereUniqueInput } from "../inputs/TripWhereUniqueInput";

@TypeGraphQL.InputType("TripUpdateOneWithoutChatRoomNestedInput", {})
export class TripUpdateOneWithoutChatRoomNestedInput {
  @TypeGraphQL.Field(_type => TripCreateWithoutChatRoomInput, {
    nullable: true
  })
  create?: TripCreateWithoutChatRoomInput | undefined;

  @TypeGraphQL.Field(_type => TripCreateOrConnectWithoutChatRoomInput, {
    nullable: true
  })
  connectOrCreate?: TripCreateOrConnectWithoutChatRoomInput | undefined;

  @TypeGraphQL.Field(_type => TripUpsertWithoutChatRoomInput, {
    nullable: true
  })
  upsert?: TripUpsertWithoutChatRoomInput | undefined;

  @TypeGraphQL.Field(_type => TripWhereInput, {
    nullable: true
  })
  disconnect?: TripWhereInput | undefined;

  @TypeGraphQL.Field(_type => TripWhereInput, {
    nullable: true
  })
  delete?: TripWhereInput | undefined;

  @TypeGraphQL.Field(_type => TripWhereUniqueInput, {
    nullable: true
  })
  connect?: TripWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TripUpdateToOneWithWhereWithoutChatRoomInput, {
    nullable: true
  })
  update?: TripUpdateToOneWithWhereWithoutChatRoomInput | undefined;
}
