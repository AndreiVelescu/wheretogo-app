import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TripCollaboratorOrderByWithAggregationInput } from "../../../inputs/TripCollaboratorOrderByWithAggregationInput";
import { TripCollaboratorScalarWhereWithAggregatesInput } from "../../../inputs/TripCollaboratorScalarWhereWithAggregatesInput";
import { TripCollaboratorWhereInput } from "../../../inputs/TripCollaboratorWhereInput";
import { TripCollaboratorScalarFieldEnum } from "../../../../enums/TripCollaboratorScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTripCollaboratorArgs {
  @TypeGraphQL.Field(_type => TripCollaboratorWhereInput, {
    nullable: true
  })
  where?: TripCollaboratorWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TripCollaboratorOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TripCollaboratorOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripCollaboratorScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "tripId" | "userId" | "role" | "createdAt">;

  @TypeGraphQL.Field(_type => TripCollaboratorScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TripCollaboratorScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
