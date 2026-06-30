import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripStopCreateManyLocationInput } from "../inputs/TripStopCreateManyLocationInput";

@TypeGraphQL.InputType("TripStopCreateManyLocationInputEnvelope", {})
export class TripStopCreateManyLocationInputEnvelope {
  @TypeGraphQL.Field(_type => [TripStopCreateManyLocationInput], {
    nullable: false
  })
  data!: TripStopCreateManyLocationInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
