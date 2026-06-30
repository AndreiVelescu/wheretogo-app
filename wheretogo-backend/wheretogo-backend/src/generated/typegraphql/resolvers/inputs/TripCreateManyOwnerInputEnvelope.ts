import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCreateManyOwnerInput } from "../inputs/TripCreateManyOwnerInput";

@TypeGraphQL.InputType("TripCreateManyOwnerInputEnvelope", {})
export class TripCreateManyOwnerInputEnvelope {
  @TypeGraphQL.Field(_type => [TripCreateManyOwnerInput], {
    nullable: false
  })
  data!: TripCreateManyOwnerInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
