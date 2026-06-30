import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeviceTokenUpdateInput } from "../../../inputs/DeviceTokenUpdateInput";
import { DeviceTokenWhereUniqueInput } from "../../../inputs/DeviceTokenWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneDeviceTokenArgs {
  @TypeGraphQL.Field(_type => DeviceTokenUpdateInput, {
    nullable: false
  })
  data!: DeviceTokenUpdateInput;

  @TypeGraphQL.Field(_type => DeviceTokenWhereUniqueInput, {
    nullable: false
  })
  where!: DeviceTokenWhereUniqueInput;
}
