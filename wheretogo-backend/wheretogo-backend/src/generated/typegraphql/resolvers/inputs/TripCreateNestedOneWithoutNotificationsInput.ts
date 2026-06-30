import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCreateOrConnectWithoutNotificationsInput } from "../inputs/TripCreateOrConnectWithoutNotificationsInput";
import { TripCreateWithoutNotificationsInput } from "../inputs/TripCreateWithoutNotificationsInput";
import { TripWhereUniqueInput } from "../inputs/TripWhereUniqueInput";

@TypeGraphQL.InputType("TripCreateNestedOneWithoutNotificationsInput", {})
export class TripCreateNestedOneWithoutNotificationsInput {
  @TypeGraphQL.Field(_type => TripCreateWithoutNotificationsInput, {
    nullable: true
  })
  create?: TripCreateWithoutNotificationsInput | undefined;

  @TypeGraphQL.Field(_type => TripCreateOrConnectWithoutNotificationsInput, {
    nullable: true
  })
  connectOrCreate?: TripCreateOrConnectWithoutNotificationsInput | undefined;

  @TypeGraphQL.Field(_type => TripWhereUniqueInput, {
    nullable: true
  })
  connect?: TripWhereUniqueInput | undefined;
}
