import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceTokenWhereInput } from "../inputs/DeviceTokenWhereInput";

@TypeGraphQL.InputType("DeviceTokenListRelationFilter", {})
export class DeviceTokenListRelationFilter {
  @TypeGraphQL.Field(_type => DeviceTokenWhereInput, {
    nullable: true
  })
  every?: DeviceTokenWhereInput | undefined;

  @TypeGraphQL.Field(_type => DeviceTokenWhereInput, {
    nullable: true
  })
  some?: DeviceTokenWhereInput | undefined;

  @TypeGraphQL.Field(_type => DeviceTokenWhereInput, {
    nullable: true
  })
  none?: DeviceTokenWhereInput | undefined;
}
