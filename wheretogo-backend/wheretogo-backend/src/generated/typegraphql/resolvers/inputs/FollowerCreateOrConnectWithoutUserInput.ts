import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowerCreateWithoutUserInput } from "../inputs/FollowerCreateWithoutUserInput";
import { FollowerWhereUniqueInput } from "../inputs/FollowerWhereUniqueInput";

@TypeGraphQL.InputType("FollowerCreateOrConnectWithoutUserInput", {})
export class FollowerCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => FollowerWhereUniqueInput, {
    nullable: false
  })
  where!: FollowerWhereUniqueInput;

  @TypeGraphQL.Field(_type => FollowerCreateWithoutUserInput, {
    nullable: false
  })
  create!: FollowerCreateWithoutUserInput;
}
