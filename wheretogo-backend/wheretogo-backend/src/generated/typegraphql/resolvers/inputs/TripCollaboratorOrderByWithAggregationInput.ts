import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCollaboratorAvgOrderByAggregateInput } from "../inputs/TripCollaboratorAvgOrderByAggregateInput";
import { TripCollaboratorCountOrderByAggregateInput } from "../inputs/TripCollaboratorCountOrderByAggregateInput";
import { TripCollaboratorMaxOrderByAggregateInput } from "../inputs/TripCollaboratorMaxOrderByAggregateInput";
import { TripCollaboratorMinOrderByAggregateInput } from "../inputs/TripCollaboratorMinOrderByAggregateInput";
import { TripCollaboratorSumOrderByAggregateInput } from "../inputs/TripCollaboratorSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TripCollaboratorOrderByWithAggregationInput", {})
export class TripCollaboratorOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tripId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  role?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TripCollaboratorCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TripCollaboratorCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TripCollaboratorAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: TripCollaboratorAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TripCollaboratorMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TripCollaboratorMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TripCollaboratorMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TripCollaboratorMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TripCollaboratorSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: TripCollaboratorSumOrderByAggregateInput | undefined;
}
