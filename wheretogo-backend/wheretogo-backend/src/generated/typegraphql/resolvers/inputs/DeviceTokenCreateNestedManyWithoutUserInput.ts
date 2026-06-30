import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceTokenCreateManyUserInputEnvelope } from "../inputs/DeviceTokenCreateManyUserInputEnvelope";
import { DeviceTokenCreateOrConnectWithoutUserInput } from "../inputs/DeviceTokenCreateOrConnectWithoutUserInput";
import { DeviceTokenCreateWithoutUserInput } from "../inputs/DeviceTokenCreateWithoutUserInput";
import { DeviceTokenWhereUniqueInput } from "../inputs/DeviceTokenWhereUniqueInput";

@TypeGraphQL.InputType("DeviceTokenCreateNestedManyWithoutUserInput", {})
export class DeviceTokenCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [DeviceTokenCreateWithoutUserInput], {
    nullable: true
  })
  create?: DeviceTokenCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeviceTokenCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: DeviceTokenCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => DeviceTokenCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: DeviceTokenCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [DeviceTokenWhereUniqueInput], {
    nullable: true
  })
  connect?: DeviceTokenWhereUniqueInput[] | undefined;
}
