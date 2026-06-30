import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCollaboratorCreateManyTripInput } from "../inputs/TripCollaboratorCreateManyTripInput";

@TypeGraphQL.InputType("TripCollaboratorCreateManyTripInputEnvelope", {})
export class TripCollaboratorCreateManyTripInputEnvelope {
  @TypeGraphQL.Field(_type => [TripCollaboratorCreateManyTripInput], {
    nullable: false
  })
  data!: TripCollaboratorCreateManyTripInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
