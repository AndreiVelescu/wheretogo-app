import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripStopCreateManyLocationInputEnvelope } from "../inputs/TripStopCreateManyLocationInputEnvelope";
import { TripStopCreateOrConnectWithoutLocationInput } from "../inputs/TripStopCreateOrConnectWithoutLocationInput";
import { TripStopCreateWithoutLocationInput } from "../inputs/TripStopCreateWithoutLocationInput";
import { TripStopWhereUniqueInput } from "../inputs/TripStopWhereUniqueInput";

@TypeGraphQL.InputType("TripStopCreateNestedManyWithoutLocationInput", {})
export class TripStopCreateNestedManyWithoutLocationInput {
  @TypeGraphQL.Field(_type => [TripStopCreateWithoutLocationInput], {
    nullable: true
  })
  create?: TripStopCreateWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripStopCreateOrConnectWithoutLocationInput], {
    nullable: true
  })
  connectOrCreate?: TripStopCreateOrConnectWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => TripStopCreateManyLocationInputEnvelope, {
    nullable: true
  })
  createMany?: TripStopCreateManyLocationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TripStopWhereUniqueInput], {
    nullable: true
  })
  connect?: TripStopWhereUniqueInput[] | undefined;
}
