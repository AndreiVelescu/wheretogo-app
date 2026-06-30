import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TripCollaboratorCreateInput } from "../../../inputs/TripCollaboratorCreateInput";
import { TripCollaboratorUpdateInput } from "../../../inputs/TripCollaboratorUpdateInput";
import { TripCollaboratorWhereUniqueInput } from "../../../inputs/TripCollaboratorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneTripCollaboratorArgs {
  @TypeGraphQL.Field(_type => TripCollaboratorWhereUniqueInput, {
    nullable: false
  })
  where!: TripCollaboratorWhereUniqueInput;

  @TypeGraphQL.Field(_type => TripCollaboratorCreateInput, {
    nullable: false
  })
  create!: TripCollaboratorCreateInput;

  @TypeGraphQL.Field(_type => TripCollaboratorUpdateInput, {
    nullable: false
  })
  update!: TripCollaboratorUpdateInput;
}
