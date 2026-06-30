import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceTokenCreateWithoutUserInput } from "../inputs/DeviceTokenCreateWithoutUserInput";
import { DeviceTokenWhereUniqueInput } from "../inputs/DeviceTokenWhereUniqueInput";

@TypeGraphQL.InputType("DeviceTokenCreateOrConnectWithoutUserInput", {})
export class DeviceTokenCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => DeviceTokenWhereUniqueInput, {
    nullable: false
  })
  where!: DeviceTokenWhereUniqueInput;

  @TypeGraphQL.Field(_type => DeviceTokenCreateWithoutUserInput, {
    nullable: false
  })
  create!: DeviceTokenCreateWithoutUserInput;
}
