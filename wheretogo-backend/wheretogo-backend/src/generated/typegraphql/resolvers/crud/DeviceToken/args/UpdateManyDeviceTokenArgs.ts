import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeviceTokenUpdateManyMutationInput } from "../../../inputs/DeviceTokenUpdateManyMutationInput";
import { DeviceTokenWhereInput } from "../../../inputs/DeviceTokenWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyDeviceTokenArgs {
  @TypeGraphQL.Field(_type => DeviceTokenUpdateManyMutationInput, {
    nullable: false
  })
  data!: DeviceTokenUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => DeviceTokenWhereInput, {
    nullable: true
  })
  where?: DeviceTokenWhereInput | undefined;
}
