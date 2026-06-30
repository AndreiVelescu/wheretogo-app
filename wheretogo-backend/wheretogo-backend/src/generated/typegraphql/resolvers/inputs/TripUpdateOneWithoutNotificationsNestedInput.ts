import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCreateOrConnectWithoutNotificationsInput } from "../inputs/TripCreateOrConnectWithoutNotificationsInput";
import { TripCreateWithoutNotificationsInput } from "../inputs/TripCreateWithoutNotificationsInput";
import { TripUpdateToOneWithWhereWithoutNotificationsInput } from "../inputs/TripUpdateToOneWithWhereWithoutNotificationsInput";
import { TripUpsertWithoutNotificationsInput } from "../inputs/TripUpsertWithoutNotificationsInput";
import { TripWhereInput } from "../inputs/TripWhereInput";
import { TripWhereUniqueInput } from "../inputs/TripWhereUniqueInput";

@TypeGraphQL.InputType("TripUpdateOneWithoutNotificationsNestedInput", {})
export class TripUpdateOneWithoutNotificationsNestedInput {
  @TypeGraphQL.Field(_type => TripCreateWithoutNotificationsInput, {
    nullable: true
  })
  create?: TripCreateWithoutNotificationsInput | undefined;

  @TypeGraphQL.Field(_type => TripCreateOrConnectWithoutNotificationsInput, {
    nullable: true
  })
  connectOrCreate?: TripCreateOrConnectWithoutNotificationsInput | undefined;

  @TypeGraphQL.Field(_type => TripUpsertWithoutNotificationsInput, {
    nullable: true
  })
  upsert?: TripUpsertWithoutNotificationsInput | undefined;

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

  @TypeGraphQL.Field(_type => TripUpdateToOneWithWhereWithoutNotificationsInput, {
    nullable: true
  })
  update?: TripUpdateToOneWithWhereWithoutNotificationsInput | undefined;
}
