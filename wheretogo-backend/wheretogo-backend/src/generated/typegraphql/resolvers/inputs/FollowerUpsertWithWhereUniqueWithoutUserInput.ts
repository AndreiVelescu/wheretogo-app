import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowerCreateWithoutUserInput } from "../inputs/FollowerCreateWithoutUserInput";
import { FollowerUpdateWithoutUserInput } from "../inputs/FollowerUpdateWithoutUserInput";
import { FollowerWhereUniqueInput } from "../inputs/FollowerWhereUniqueInput";

@TypeGraphQL.InputType("FollowerUpsertWithWhereUniqueWithoutUserInput", {})
export class FollowerUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => FollowerWhereUniqueInput, {
    nullable: false
  })
  where!: FollowerWhereUniqueInput;

  @TypeGraphQL.Field(_type => FollowerUpdateWithoutUserInput, {
    nullable: false
  })
  update!: FollowerUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => FollowerCreateWithoutUserInput, {
    nullable: false
  })
  create!: FollowerCreateWithoutUserInput;
}
