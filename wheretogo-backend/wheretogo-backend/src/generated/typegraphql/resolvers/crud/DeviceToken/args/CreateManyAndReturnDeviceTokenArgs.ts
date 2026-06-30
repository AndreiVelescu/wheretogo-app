import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeviceTokenCreateManyInput } from "../../../inputs/DeviceTokenCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnDeviceTokenArgs {
  @TypeGraphQL.Field(_type => [DeviceTokenCreateManyInput], {
    nullable: false
  })
  data!: DeviceTokenCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
