import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceTokenAvgAggregate } from "../outputs/DeviceTokenAvgAggregate";
import { DeviceTokenCountAggregate } from "../outputs/DeviceTokenCountAggregate";
import { DeviceTokenMaxAggregate } from "../outputs/DeviceTokenMaxAggregate";
import { DeviceTokenMinAggregate } from "../outputs/DeviceTokenMinAggregate";
import { DeviceTokenSumAggregate } from "../outputs/DeviceTokenSumAggregate";
import { Platform } from "../../enums/Platform";

@TypeGraphQL.ObjectType("DeviceTokenGroupBy", {
  simpleResolvers: true
})
export class DeviceTokenGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  token!: string;

  @TypeGraphQL.Field(_type => Platform, {
    nullable: false
  })
  platform!: "IOS" | "ANDROID" | "WEB";

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isActive!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

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
