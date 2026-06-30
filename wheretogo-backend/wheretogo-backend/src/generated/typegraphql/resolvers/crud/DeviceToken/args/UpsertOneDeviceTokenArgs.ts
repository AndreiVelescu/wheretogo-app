import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeviceTokenCreateInput } from "../../../inputs/DeviceTokenCreateInput";
import { DeviceTokenUpdateInput } from "../../../inputs/DeviceTokenUpdateInput";
import { DeviceTokenWhereUniqueInput } from "../../../inputs/DeviceTokenWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneDeviceTokenArgs {
  @TypeGraphQL.Field(_type => DeviceTokenWhereUniqueInput, {
    nullable: false
  })
  where!: DeviceTokenWhereUniqueInput;

  @TypeGraphQL.Field(_type => DeviceTokenCreateInput, {
    nullable: false
  })
  create!: DeviceTokenCreateInput;

  @TypeGraphQL.Field(_type => DeviceTokenUpdateInput, {
    nullable: false
  })
  update!: DeviceTokenUpdateInput;
}
