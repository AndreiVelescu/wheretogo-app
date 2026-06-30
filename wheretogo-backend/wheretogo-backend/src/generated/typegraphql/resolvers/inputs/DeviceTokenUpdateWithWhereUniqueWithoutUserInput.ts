import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceTokenUpdateWithoutUserInput } from "../inputs/DeviceTokenUpdateWithoutUserInput";
import { DeviceTokenWhereUniqueInput } from "../inputs/DeviceTokenWhereUniqueInput";

@TypeGraphQL.InputType("DeviceTokenUpdateWithWhereUniqueWithoutUserInput", {})
export class DeviceTokenUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => DeviceTokenWhereUniqueInput, {
    nullable: false
  })
  where!: DeviceTokenWhereUniqueInput;

  @TypeGraphQL.Field(_type => DeviceTokenUpdateWithoutUserInput, {
    nullable: false
  })
  data!: DeviceTokenUpdateWithoutUserInput;
}
