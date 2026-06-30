import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeviceTokenOrderByWithAggregationInput } from "../../../inputs/DeviceTokenOrderByWithAggregationInput";
import { DeviceTokenScalarWhereWithAggregatesInput } from "../../../inputs/DeviceTokenScalarWhereWithAggregatesInput";
import { DeviceTokenWhereInput } from "../../../inputs/DeviceTokenWhereInput";
import { DeviceTokenScalarFieldEnum } from "../../../../enums/DeviceTokenScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByDeviceTokenArgs {
  @TypeGraphQL.Field(_type => DeviceTokenWhereInput, {
    nullable: true
  })
  where?: DeviceTokenWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DeviceTokenOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: DeviceTokenOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeviceTokenScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "userId" | "token" | "platform" | "isActive" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => DeviceTokenScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: DeviceTokenScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
