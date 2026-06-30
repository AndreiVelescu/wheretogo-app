import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeviceTokenWhereUniqueInput } from "../../../inputs/DeviceTokenWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueDeviceTokenOrThrowArgs {
  @TypeGraphQL.Field(_type => DeviceTokenWhereUniqueInput, {
    nullable: false
  })
  where!: DeviceTokenWhereUniqueInput;
}
