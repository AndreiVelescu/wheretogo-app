import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceTokenCreateManyUserInput } from "../inputs/DeviceTokenCreateManyUserInput";

@TypeGraphQL.InputType("DeviceTokenCreateManyUserInputEnvelope", {})
export class DeviceTokenCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [DeviceTokenCreateManyUserInput], {
    nullable: false
  })
  data!: DeviceTokenCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
