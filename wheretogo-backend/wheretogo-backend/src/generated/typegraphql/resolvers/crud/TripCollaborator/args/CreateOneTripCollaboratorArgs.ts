import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TripCollaboratorCreateInput } from "../../../inputs/TripCollaboratorCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneTripCollaboratorArgs {
  @TypeGraphQL.Field(_type => TripCollaboratorCreateInput, {
    nullable: false
  })
  data!: TripCollaboratorCreateInput;
}
