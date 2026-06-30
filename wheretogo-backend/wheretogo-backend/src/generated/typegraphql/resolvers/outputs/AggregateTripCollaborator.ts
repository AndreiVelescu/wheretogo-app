import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCollaboratorAvgAggregate } from "../outputs/TripCollaboratorAvgAggregate";
import { TripCollaboratorCountAggregate } from "../outputs/TripCollaboratorCountAggregate";
import { TripCollaboratorMaxAggregate } from "../outputs/TripCollaboratorMaxAggregate";
import { TripCollaboratorMinAggregate } from "../outputs/TripCollaboratorMinAggregate";
import { TripCollaboratorSumAggregate } from "../outputs/TripCollaboratorSumAggregate";

@TypeGraphQL.ObjectType("AggregateTripCollaborator", {
  simpleResolvers: true
})
export class AggregateTripCollaborator {
  @TypeGraphQL.Field(_type => TripCollaboratorCountAggregate, {
    nullable: true
  })
  _count!: TripCollaboratorCountAggregate | null;

  @TypeGraphQL.Field(_type => TripCollaboratorAvgAggregate, {
    nullable: true
  })
  _avg!: TripCollaboratorAvgAggregate | null;

  @TypeGraphQL.Field(_type => TripCollaboratorSumAggregate, {
    nullable: true
  })
  _sum!: TripCollaboratorSumAggregate | null;

  @TypeGraphQL.Field(_type => TripCollaboratorMinAggregate, {
    nullable: true
  })
  _min!: TripCollaboratorMinAggregate | null;

  @TypeGraphQL.Field(_type => TripCollaboratorMaxAggregate, {
    nullable: true
  })
  _max!: TripCollaboratorMaxAggregate | null;
}
