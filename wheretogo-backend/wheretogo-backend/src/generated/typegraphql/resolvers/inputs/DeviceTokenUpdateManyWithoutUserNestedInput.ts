import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceTokenCreateManyUserInputEnvelope } from "../inputs/DeviceTokenCreateManyUserInputEnvelope";
import { DeviceTokenCreateOrConnectWithoutUserInput } from "../inputs/DeviceTokenCreateOrConnectWithoutUserInput";
import { DeviceTokenCreateWithoutUserInput } from "../inputs/DeviceTokenCreateWithoutUserInput";
import { DeviceTokenScalarWhereInput } from "../inputs/DeviceTokenScalarWhereInput";
import { DeviceTokenUpdateManyWithWhereWithoutUserInput } from "../inputs/DeviceTokenUpdateManyWithWhereWithoutUserInput";
import { DeviceTokenUpdateWithWhereUniqueWithoutUserInput } from "../inputs/DeviceTokenUpdateWithWhereUniqueWithoutUserInput";
import { DeviceTokenUpsertWithWhereUniqueWithoutUserInput } from "../inputs/DeviceTokenUpsertWithWhereUniqueWithoutUserInput";
import { DeviceTokenWhereUniqueInput } from "../inputs/DeviceTokenWhereUniqueInput";

@TypeGraphQL.InputType("DeviceTokenUpdateManyWithoutUserNestedInput", {})
export class DeviceTokenUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [DeviceTokenCreateWithoutUserInput], {
    nullable: true
  })
  create?: DeviceTokenCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeviceTokenCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: DeviceTokenCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeviceTokenUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: DeviceTokenUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => DeviceTokenCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: DeviceTokenCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [DeviceTokenWhereUniqueInput], {
    nullable: true
  })
  set?: DeviceTokenWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeviceTokenWhereUniqueInput], {
    nullable: true
  })
  disconnect?: DeviceTokenWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeviceTokenWhereUniqueInput], {
    nullable: true
  })
  delete?: DeviceTokenWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeviceTokenWhereUniqueInput], {
    nullable: true
  })
  connect?: DeviceTokenWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeviceTokenUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: DeviceTokenUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeviceTokenUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: DeviceTokenUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeviceTokenScalarWhereInput], {
    nullable: true
  })
  deleteMany?: DeviceTokenScalarWhereInput[] | undefined;
}
