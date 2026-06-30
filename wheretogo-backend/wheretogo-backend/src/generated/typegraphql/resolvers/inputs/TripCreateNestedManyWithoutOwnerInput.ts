import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCreateManyOwnerInputEnvelope } from "../inputs/TripCreateManyOwnerInputEnvelope";
import { TripCreateOrConnectWithoutOwnerInput } from "../inputs/TripCreateOrConnectWithoutOwnerInput";
import { TripCreateWithoutOwnerInput } from "../inputs/TripCreateWithoutOwnerInput";
import { TripWhereUniqueInput } from "../inputs/TripWhereUniqueInput";

@TypeGraphQL.InputType("TripCreateNestedManyWithoutOwnerInput", {})
export class TripCreateNestedManyWithoutOwnerInput {
  @TypeGraphQL.Field(_type => [TripCreateWithoutOwnerInput], {
    nullable: true
  })
  create?: TripCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripCreateOrConnectWithoutOwnerInput], {
    nullable: true
  })
  connectOrCreate?: TripCreateOrConnectWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => TripCreateManyOwnerInputEnvelope, {
    nullable: true
  })
  createMany?: TripCreateManyOwnerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TripWhereUniqueInput], {
    nullable: true
  })
  connect?: TripWhereUniqueInput[] | undefined;
}
