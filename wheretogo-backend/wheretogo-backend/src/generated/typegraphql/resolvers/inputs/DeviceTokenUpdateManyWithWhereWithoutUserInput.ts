import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceTokenScalarWhereInput } from "../inputs/DeviceTokenScalarWhereInput";
import { DeviceTokenUpdateManyMutationInput } from "../inputs/DeviceTokenUpdateManyMutationInput";

@TypeGraphQL.InputType("DeviceTokenUpdateManyWithWhereWithoutUserInput", {})
export class DeviceTokenUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => DeviceTokenScalarWhereInput, {
    nullable: false
  })
  where!: DeviceTokenScalarWhereInput;

  @TypeGraphQL.Field(_type => DeviceTokenUpdateManyMutationInput, {
    nullable: false
  })
  data!: DeviceTokenUpdateManyMutationInput;
}
