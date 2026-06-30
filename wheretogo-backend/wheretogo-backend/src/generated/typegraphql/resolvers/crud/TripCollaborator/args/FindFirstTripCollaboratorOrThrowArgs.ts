import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TripCollaboratorOrderByWithRelationInput } from "../../../inputs/TripCollaboratorOrderByWithRelationInput";
import { TripCollaboratorWhereInput } from "../../../inputs/TripCollaboratorWhereInput";
import { TripCollaboratorWhereUniqueInput } from "../../../inputs/TripCollaboratorWhereUniqueInput";
import { TripCollaboratorScalarFieldEnum } from "../../../../enums/TripCollaboratorScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstTripCollaboratorOrThrowArgs {
  @TypeGraphQL.Field(_type => TripCollaboratorWhereInput, {
    nullable: true
  })
  where?: TripCollaboratorWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TripCollaboratorOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TripCollaboratorOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TripCollaboratorWhereUniqueInput, {
    nullable: true
  })
  cursor?: TripCollaboratorWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [TripCollaboratorScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "tripId" | "userId" | "role" | "createdAt"> | undefined;
}
