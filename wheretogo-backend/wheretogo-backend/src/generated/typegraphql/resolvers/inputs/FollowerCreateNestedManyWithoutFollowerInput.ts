import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowerCreateManyFollowerInputEnvelope } from "../inputs/FollowerCreateManyFollowerInputEnvelope";
import { FollowerCreateOrConnectWithoutFollowerInput } from "../inputs/FollowerCreateOrConnectWithoutFollowerInput";
import { FollowerCreateWithoutFollowerInput } from "../inputs/FollowerCreateWithoutFollowerInput";
import { FollowerWhereUniqueInput } from "../inputs/FollowerWhereUniqueInput";

@TypeGraphQL.InputType("FollowerCreateNestedManyWithoutFollowerInput", {})
export class FollowerCreateNestedManyWithoutFollowerInput {
  @TypeGraphQL.Field(_type => [FollowerCreateWithoutFollowerInput], {
    nullable: true
  })
  create?: FollowerCreateWithoutFollowerInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowerCreateOrConnectWithoutFollowerInput], {
    nullable: true
  })
  connectOrCreate?: FollowerCreateOrConnectWithoutFollowerInput[] | undefined;

  @TypeGraphQL.Field(_type => FollowerCreateManyFollowerInputEnvelope, {
    nullable: true
  })
  createMany?: FollowerCreateManyFollowerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FollowerWhereUniqueInput], {
    nullable: true
  })
  connect?: FollowerWhereUniqueInput[] | undefined;
}
