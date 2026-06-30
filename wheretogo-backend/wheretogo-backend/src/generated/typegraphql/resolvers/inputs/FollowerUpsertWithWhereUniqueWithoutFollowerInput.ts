import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowerCreateWithoutFollowerInput } from "../inputs/FollowerCreateWithoutFollowerInput";
import { FollowerUpdateWithoutFollowerInput } from "../inputs/FollowerUpdateWithoutFollowerInput";
import { FollowerWhereUniqueInput } from "../inputs/FollowerWhereUniqueInput";

@TypeGraphQL.InputType("FollowerUpsertWithWhereUniqueWithoutFollowerInput", {})
export class FollowerUpsertWithWhereUniqueWithoutFollowerInput {
  @TypeGraphQL.Field(_type => FollowerWhereUniqueInput, {
    nullable: false
  })
  where!: FollowerWhereUniqueInput;

  @TypeGraphQL.Field(_type => FollowerUpdateWithoutFollowerInput, {
    nullable: false
  })
  update!: FollowerUpdateWithoutFollowerInput;

  @TypeGraphQL.Field(_type => FollowerCreateWithoutFollowerInput, {
    nullable: false
  })
  create!: FollowerCreateWithoutFollowerInput;
}
