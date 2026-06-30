import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCollaboratorCreateWithoutUserInput } from "../inputs/TripCollaboratorCreateWithoutUserInput";
import { TripCollaboratorWhereUniqueInput } from "../inputs/TripCollaboratorWhereUniqueInput";

@TypeGraphQL.InputType("TripCollaboratorCreateOrConnectWithoutUserInput", {})
export class TripCollaboratorCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => TripCollaboratorWhereUniqueInput, {
    nullable: false
  })
  where!: TripCollaboratorWhereUniqueInput;

  @TypeGraphQL.Field(_type => TripCollaboratorCreateWithoutUserInput, {
    nullable: false
  })
  create!: TripCollaboratorCreateWithoutUserInput;
}
