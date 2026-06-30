import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowerCreateManyUserInputEnvelope } from "../inputs/FollowerCreateManyUserInputEnvelope";
import { FollowerCreateOrConnectWithoutUserInput } from "../inputs/FollowerCreateOrConnectWithoutUserInput";
import { FollowerCreateWithoutUserInput } from "../inputs/FollowerCreateWithoutUserInput";
import { FollowerWhereUniqueInput } from "../inputs/FollowerWhereUniqueInput";

@TypeGraphQL.InputType("FollowerCreateNestedManyWithoutUserInput", {})
export class FollowerCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [FollowerCreateWithoutUserInput], {
    nullable: true
  })
  create?: FollowerCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowerCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: FollowerCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => FollowerCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: FollowerCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FollowerWhereUniqueInput], {
    nullable: true
  })
  connect?: FollowerWhereUniqueInput[] | undefined;
}
