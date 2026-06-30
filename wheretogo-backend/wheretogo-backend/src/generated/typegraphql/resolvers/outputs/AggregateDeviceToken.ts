import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceTokenAvgAggregate } from "../outputs/DeviceTokenAvgAggregate";
import { DeviceTokenCountAggregate } from "../outputs/DeviceTokenCountAggregate";
import { DeviceTokenMaxAggregate } from "../outputs/DeviceTokenMaxAggregate";
import { DeviceTokenMinAggregate } from "../outputs/DeviceTokenMinAggregate";
import { DeviceTokenSumAggregate } from "../outputs/DeviceTokenSumAggregate";

@TypeGraphQL.ObjectType("AggregateDeviceToken", {
  simpleResolvers: true
})
export class AggregateDeviceToken {
  @TypeGraphQL.Field(_type => DeviceTokenCountAggregate, {
    nullable: true
  })
  _count!: DeviceTokenCountAggregate | null;

  @TypeGraphQL.Field(_type => DeviceTokenAvgAggregate, {
    nullable: true
  })
  _avg!: DeviceTokenAvgAggregate | null;

  @TypeGraphQL.Field(_type => DeviceTokenSumAggregate, {
    nullable: true
  })
  _sum!: DeviceTokenSumAggregate | null;

  @TypeGraphQL.Field(_type => DeviceTokenMinAggregate, {
    nullable: true
  })
  _min!: DeviceTokenMinAggregate | null;

  @TypeGraphQL.Field(_type => DeviceTokenMaxAggregate, {
    nullable: true
  })
  _max!: DeviceTokenMaxAggregate | null;
}
