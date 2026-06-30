import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeviceTokenCreateInput } from "../../../inputs/DeviceTokenCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneDeviceTokenArgs {
  @TypeGraphQL.Field(_type => DeviceTokenCreateInput, {
    nullable: false
  })
  data!: DeviceTokenCreateInput;
}
