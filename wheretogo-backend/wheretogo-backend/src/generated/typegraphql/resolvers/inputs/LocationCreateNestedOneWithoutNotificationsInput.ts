import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateOrConnectWithoutNotificationsInput } from "../inputs/LocationCreateOrConnectWithoutNotificationsInput";
import { LocationCreateWithoutNotificationsInput } from "../inputs/LocationCreateWithoutNotificationsInput";
import { LocationWhereUniqueInput } from "../inputs/LocationWhereUniqueInput";

@TypeGraphQL.InputType("LocationCreateNestedOneWithoutNotificationsInput", {})
export class LocationCreateNestedOneWithoutNotificationsInput {
  @TypeGraphQL.Field(_type => LocationCreateWithoutNotificationsInput, {
    nullable: true
  })
  create?: LocationCreateWithoutNotificationsInput | undefined;

  @TypeGraphQL.Field(_type => LocationCreateOrConnectWithoutNotificationsInput, {
    nullable: true
  })
  connectOrCreate?: LocationCreateOrConnectWithoutNotificationsInput | undefined;

  @TypeGraphQL.Field(_type => LocationWhereUniqueInput, {
    nullable: true
  })
  connect?: LocationWhereUniqueInput | undefined;
}
