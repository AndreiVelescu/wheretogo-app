import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostShareCreateWithoutUserInput } from "../inputs/PostShareCreateWithoutUserInput";
import { PostShareUpdateWithoutUserInput } from "../inputs/PostShareUpdateWithoutUserInput";
import { PostShareWhereUniqueInput } from "../inputs/PostShareWhereUniqueInput";

@TypeGraphQL.InputType("PostShareUpsertWithWhereUniqueWithoutUserInput", {})
export class PostShareUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => PostShareWhereUniqueInput, {
    nullable: false
  })
  where!: PostShareWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostShareUpdateWithoutUserInput, {
    nullable: false
  })
  update!: PostShareUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => PostShareCreateWithoutUserInput, {
    nullable: false
  })
  create!: PostShareCreateWithoutUserInput;
}
