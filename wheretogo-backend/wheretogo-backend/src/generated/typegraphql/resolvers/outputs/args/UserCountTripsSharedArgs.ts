import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TripCollaboratorWhereInput } from "../../inputs/TripCollaboratorWhereInput";

@TypeGraphQL.ArgsType()
export class UserCountTripsSharedArgs {
  @TypeGraphQL.Field(_type => TripCollaboratorWhereInput, {
    nullable: true
  })
  where?: TripCollaboratorWhereInput | undefined;
}
