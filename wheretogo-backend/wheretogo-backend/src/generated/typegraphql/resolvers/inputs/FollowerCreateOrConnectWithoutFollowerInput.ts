import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowerCreateWithoutFollowerInput } from "../inputs/FollowerCreateWithoutFollowerInput";
import { FollowerWhereUniqueInput } from "../inputs/FollowerWhereUniqueInput";

@TypeGraphQL.InputType("FollowerCreateOrConnectWithoutFollowerInput", {})
export class FollowerCreateOrConnectWithoutFollowerInput {
  @TypeGraphQL.Field(_type => FollowerWhereUniqueInput, {
    nullable: false
  })
  where!: FollowerWhereUniqueInput;

  @TypeGraphQL.Field(_type => FollowerCreateWithoutFollowerInput, {
    nullable: false
  })
  create!: FollowerCreateWithoutFollowerInput;
}
