import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TripCollaboratorWhereUniqueInput } from "../../../inputs/TripCollaboratorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueTripCollaboratorOrThrowArgs {
  @TypeGraphQL.Field(_type => TripCollaboratorWhereUniqueInput, {
    nullable: false
  })
  where!: TripCollaboratorWhereUniqueInput;
}
