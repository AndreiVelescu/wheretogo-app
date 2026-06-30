import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TripCollaboratorCreateManyInput } from "../../../inputs/TripCollaboratorCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnTripCollaboratorArgs {
  @TypeGraphQL.Field(_type => [TripCollaboratorCreateManyInput], {
    nullable: false
  })
  data!: TripCollaboratorCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
