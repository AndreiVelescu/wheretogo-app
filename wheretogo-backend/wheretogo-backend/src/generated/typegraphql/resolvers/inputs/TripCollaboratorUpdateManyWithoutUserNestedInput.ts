import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCollaboratorCreateManyUserInputEnvelope } from "../inputs/TripCollaboratorCreateManyUserInputEnvelope";
import { TripCollaboratorCreateOrConnectWithoutUserInput } from "../inputs/TripCollaboratorCreateOrConnectWithoutUserInput";
import { TripCollaboratorCreateWithoutUserInput } from "../inputs/TripCollaboratorCreateWithoutUserInput";
import { TripCollaboratorScalarWhereInput } from "../inputs/TripCollaboratorScalarWhereInput";
import { TripCollaboratorUpdateManyWithWhereWithoutUserInput } from "../inputs/TripCollaboratorUpdateManyWithWhereWithoutUserInput";
import { TripCollaboratorUpdateWithWhereUniqueWithoutUserInput } from "../inputs/TripCollaboratorUpdateWithWhereUniqueWithoutUserInput";
import { TripCollaboratorUpsertWithWhereUniqueWithoutUserInput } from "../inputs/TripCollaboratorUpsertWithWhereUniqueWithoutUserInput";
import { TripCollaboratorWhereUniqueInput } from "../inputs/TripCollaboratorWhereUniqueInput";

@TypeGraphQL.InputType("TripCollaboratorUpdateManyWithoutUserNestedInput", {})
export class TripCollaboratorUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [TripCollaboratorCreateWithoutUserInput], {
    nullable: true
  })
  create?: TripCollaboratorCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripCollaboratorCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: TripCollaboratorCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripCollaboratorUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: TripCollaboratorUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => TripCollaboratorCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: TripCollaboratorCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TripCollaboratorWhereUniqueInput], {
    nullable: true
  })
  set?: TripCollaboratorWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripCollaboratorWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TripCollaboratorWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripCollaboratorWhereUniqueInput], {
    nullable: true
  })
  delete?: TripCollaboratorWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripCollaboratorWhereUniqueInput], {
    nullable: true
  })
  connect?: TripCollaboratorWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripCollaboratorUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: TripCollaboratorUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripCollaboratorUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: TripCollaboratorUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripCollaboratorScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TripCollaboratorScalarWhereInput[] | undefined;
}
