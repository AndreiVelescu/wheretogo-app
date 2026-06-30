import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCollaboratorCreateManyUserInput } from "../inputs/TripCollaboratorCreateManyUserInput";

@TypeGraphQL.InputType("TripCollaboratorCreateManyUserInputEnvelope", {})
export class TripCollaboratorCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [TripCollaboratorCreateManyUserInput], {
    nullable: false
  })
  data!: TripCollaboratorCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
