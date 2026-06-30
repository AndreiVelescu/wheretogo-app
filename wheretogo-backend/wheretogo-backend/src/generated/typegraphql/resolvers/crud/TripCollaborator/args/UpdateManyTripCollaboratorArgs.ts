import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TripCollaboratorUpdateManyMutationInput } from "../../../inputs/TripCollaboratorUpdateManyMutationInput";
import { TripCollaboratorWhereInput } from "../../../inputs/TripCollaboratorWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTripCollaboratorArgs {
  @TypeGraphQL.Field(_type => TripCollaboratorUpdateManyMutationInput, {
    nullable: false
  })
  data!: TripCollaboratorUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TripCollaboratorWhereInput, {
    nullable: true
  })
  where?: TripCollaboratorWhereInput | undefined;
}
