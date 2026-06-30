import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCollaboratorUpdateWithoutUserInput } from "../inputs/TripCollaboratorUpdateWithoutUserInput";
import { TripCollaboratorWhereUniqueInput } from "../inputs/TripCollaboratorWhereUniqueInput";

@TypeGraphQL.InputType("TripCollaboratorUpdateWithWhereUniqueWithoutUserInput", {})
export class TripCollaboratorUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => TripCollaboratorWhereUniqueInput, {
    nullable: false
  })
  where!: TripCollaboratorWhereUniqueInput;

  @TypeGraphQL.Field(_type => TripCollaboratorUpdateWithoutUserInput, {
    nullable: false
  })
  data!: TripCollaboratorUpdateWithoutUserInput;
}
