import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeviceTokenWhereInput } from "../../inputs/DeviceTokenWhereInput";

@TypeGraphQL.ArgsType()
export class UserCountDeviceTokensArgs {
  @TypeGraphQL.Field(_type => DeviceTokenWhereInput, {
    nullable: true
  })
  where?: DeviceTokenWhereInput | undefined;
}
