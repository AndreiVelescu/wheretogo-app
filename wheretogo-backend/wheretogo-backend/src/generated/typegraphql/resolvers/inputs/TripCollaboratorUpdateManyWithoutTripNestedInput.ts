import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCollaboratorCreateManyTripInputEnvelope } from "../inputs/TripCollaboratorCreateManyTripInputEnvelope";
import { TripCollaboratorCreateOrConnectWithoutTripInput } from "../inputs/TripCollaboratorCreateOrConnectWithoutTripInput";
import { TripCollaboratorCreateWithoutTripInput } from "../inputs/TripCollaboratorCreateWithoutTripInput";
import { TripCollaboratorScalarWhereInput } from "../inputs/TripCollaboratorScalarWhereInput";
import { TripCollaboratorUpdateManyWithWhereWithoutTripInput } from "../inputs/TripCollaboratorUpdateManyWithWhereWithoutTripInput";
import { TripCollaboratorUpdateWithWhereUniqueWithoutTripInput } from "../inputs/TripCollaboratorUpdateWithWhereUniqueWithoutTripInput";
import { TripCollaboratorUpsertWithWhereUniqueWithoutTripInput } from "../inputs/TripCollaboratorUpsertWithWhereUniqueWithoutTripInput";
import { TripCollaboratorWhereUniqueInput } from "../inputs/TripCollaboratorWhereUniqueInput";

@TypeGraphQL.InputType("TripCollaboratorUpdateManyWithoutTripNestedInput", {})
export class TripCollaboratorUpdateManyWithoutTripNestedInput {
  @TypeGraphQL.Field(_type => [TripCollaboratorCreateWithoutTripInput], {
    nullable: true
  })
  create?: TripCollaboratorCreateWithoutTripInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripCollaboratorCreateOrConnectWithoutTripInput], {
    nullable: true
  })
  connectOrCreate?: TripCollaboratorCreateOrConnectWithoutTripInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripCollaboratorUpsertWithWhereUniqueWithoutTripInput], {
    nullable: true
  })
  upsert?: TripCollaboratorUpsertWithWhereUniqueWithoutTripInput[] | undefined;

  @TypeGraphQL.Field(_type => TripCollaboratorCreateManyTripInputEnvelope, {
    nullable: true
  })
  createMany?: TripCollaboratorCreateManyTripInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [TripCollaboratorUpdateWithWhereUniqueWithoutTripInput], {
    nullable: true
  })
  update?: TripCollaboratorUpdateWithWhereUniqueWithoutTripInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripCollaboratorUpdateManyWithWhereWithoutTripInput], {
    nullable: true
  })
  updateMany?: TripCollaboratorUpdateManyWithWhereWithoutTripInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripCollaboratorScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TripCollaboratorScalarWhereInput[] | undefined;
}
