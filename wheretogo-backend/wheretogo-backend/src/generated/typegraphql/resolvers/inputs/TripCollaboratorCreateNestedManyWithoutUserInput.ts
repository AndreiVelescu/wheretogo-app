import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCollaboratorCreateManyUserInputEnvelope } from "../inputs/TripCollaboratorCreateManyUserInputEnvelope";
import { TripCollaboratorCreateOrConnectWithoutUserInput } from "../inputs/TripCollaboratorCreateOrConnectWithoutUserInput";
import { TripCollaboratorCreateWithoutUserInput } from "../inputs/TripCollaboratorCreateWithoutUserInput";
import { TripCollaboratorWhereUniqueInput } from "../inputs/TripCollaboratorWhereUniqueInput";

@TypeGraphQL.InputType("TripCollaboratorCreateNestedManyWithoutUserInput", {})
export class TripCollaboratorCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [TripCollaboratorCreateWithoutUserInput], {
    nullable: true
  })
  create?: TripCollaboratorCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripCollaboratorCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: TripCollaboratorCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => TripCollaboratorCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: TripCollaboratorCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TripCollaboratorWhereUniqueInput], {
    nullable: true
  })
  connect?: TripCollaboratorWhereUniqueInput[] | undefined;
}
