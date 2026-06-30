import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostShareUpdateWithoutUserInput } from "../inputs/PostShareUpdateWithoutUserInput";
import { PostShareWhereUniqueInput } from "../inputs/PostShareWhereUniqueInput";

@TypeGraphQL.InputType("PostShareUpdateWithWhereUniqueWithoutUserInput", {})
export class PostShareUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => PostShareWhereUniqueInput, {
    nullable: false
  })
  where!: PostShareWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostShareUpdateWithoutUserInput, {
    nullable: false
  })
  data!: PostShareUpdateWithoutUserInput;
}
