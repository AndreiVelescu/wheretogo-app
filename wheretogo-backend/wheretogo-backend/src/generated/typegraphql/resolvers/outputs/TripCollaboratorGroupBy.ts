import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCollaboratorAvgAggregate } from "../outputs/TripCollaboratorAvgAggregate";
import { TripCollaboratorCountAggregate } from "../outputs/TripCollaboratorCountAggregate";
import { TripCollaboratorMaxAggregate } from "../outputs/TripCollaboratorMaxAggregate";
import { TripCollaboratorMinAggregate } from "../outputs/TripCollaboratorMinAggregate";
import { TripCollaboratorSumAggregate } from "../outputs/TripCollaboratorSumAggregate";
import { TripCollaboratorRole } from "../../enums/TripCollaboratorRole";

@TypeGraphQL.ObjectType("TripCollaboratorGroupBy", {
  simpleResolvers: true
})
export class TripCollaboratorGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  tripId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  @TypeGraphQL.Field(_type => TripCollaboratorRole, {
    nullable: false
  })
  role!: "VIEWER" | "EDITOR" | "OWNER";

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

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
