import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeviceTokenOrderByWithRelationInput } from "../../../inputs/DeviceTokenOrderByWithRelationInput";
import { DeviceTokenWhereInput } from "../../../inputs/DeviceTokenWhereInput";
import { DeviceTokenWhereUniqueInput } from "../../../inputs/DeviceTokenWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateDeviceTokenArgs {
  @TypeGraphQL.Field(_type => DeviceTokenWhereInput, {
    nullable: true
  })
  where?: DeviceTokenWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DeviceTokenOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: DeviceTokenOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => DeviceTokenWhereUniqueInput, {
    nullable: true
  })
  cursor?: DeviceTokenWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
