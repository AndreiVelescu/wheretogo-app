import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateOrConnectWithoutNotificationsInput } from "../inputs/LocationCreateOrConnectWithoutNotificationsInput";
import { LocationCreateWithoutNotificationsInput } from "../inputs/LocationCreateWithoutNotificationsInput";
import { LocationUpdateToOneWithWhereWithoutNotificationsInput } from "../inputs/LocationUpdateToOneWithWhereWithoutNotificationsInput";
import { LocationUpsertWithoutNotificationsInput } from "../inputs/LocationUpsertWithoutNotificationsInput";
import { LocationWhereInput } from "../inputs/LocationWhereInput";
import { LocationWhereUniqueInput } from "../inputs/LocationWhereUniqueInput";

@TypeGraphQL.InputType("LocationUpdateOneWithoutNotificationsNestedInput", {})
export class LocationUpdateOneWithoutNotificationsNestedInput {
  @TypeGraphQL.Field(_type => LocationCreateWithoutNotificationsInput, {
    nullable: true
  })
  create?: LocationCreateWithoutNotificationsInput | undefined;

  @TypeGraphQL.Field(_type => LocationCreateOrConnectWithoutNotificationsInput, {
    nullable: true
  })
  connectOrCreate?: LocationCreateOrConnectWithoutNotificationsInput | undefined;

  @TypeGraphQL.Field(_type => LocationUpsertWithoutNotificationsInput, {
    nullable: true
  })
  upsert?: LocationUpsertWithoutNotificationsInput | undefined;

  @TypeGraphQL.Field(_type => LocationWhereInput, {
    nullable: true
  })
  disconnect?: LocationWhereInput | undefined;

  @TypeGraphQL.Field(_type => LocationWhereInput, {
    nullable: true
  })
  delete?: LocationWhereInput | undefined;

  @TypeGraphQL.Field(_type => LocationWhereUniqueInput, {
    nullable: true
  })
  connect?: LocationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LocationUpdateToOneWithWhereWithoutNotificationsInput, {
    nullable: true
  })
  update?: LocationUpdateToOneWithWhereWithoutNotificationsInput | undefined;
}
