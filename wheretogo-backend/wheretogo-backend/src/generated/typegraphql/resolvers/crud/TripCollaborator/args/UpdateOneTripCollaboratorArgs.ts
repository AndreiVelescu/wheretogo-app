import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TripCollaboratorUpdateInput } from "../../../inputs/TripCollaboratorUpdateInput";
import { TripCollaboratorWhereUniqueInput } from "../../../inputs/TripCollaboratorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneTripCollaboratorArgs {
  @TypeGraphQL.Field(_type => TripCollaboratorUpdateInput, {
    nullable: false
  })
  data!: TripCollaboratorUpdateInput;

  @TypeGraphQL.Field(_type => TripCollaboratorWhereUniqueInput, {
    nullable: false
  })
  where!: TripCollaboratorWhereUniqueInput;
}
