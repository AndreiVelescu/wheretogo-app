import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCollaboratorCreateManyTripInputEnvelope } from "../inputs/TripCollaboratorCreateManyTripInputEnvelope";
import { TripCollaboratorCreateOrConnectWithoutTripInput } from "../inputs/TripCollaboratorCreateOrConnectWithoutTripInput";
import { TripCollaboratorCreateWithoutTripInput } from "../inputs/TripCollaboratorCreateWithoutTripInput";
import { TripCollaboratorWhereUniqueInput } from "../inputs/TripCollaboratorWhereUniqueInput";

@TypeGraphQL.InputType("TripCollaboratorCreateNestedManyWithoutTripInput", {})
export class TripCollaboratorCreateNestedManyWithoutTripInput {
  @TypeGraphQL.Field(_type => [TripCollaboratorCreateWithoutTripInput], {
    nullable: true
  })
  create?: TripCollaboratorCreateWithoutTripInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripCollaboratorCreateOrConnectWithoutTripInput], {
    nullable: true
  })
  connectOrCreate?: TripCollaboratorCreateOrConnectWithoutTripInput[] | undefined;

  @TypeGraphQL.Field(_type => TripCollaboratorCreateManyTripInputEnvelope, {
    nullable: true
  })
  createMany?: TripCollaboratorCreateManyTripInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TripCollaboratorWhereUniqueInput], {
    nullable: true
  })
  connect?: TripCollaboratorWhereUniqueInput[] | undefined;
}
