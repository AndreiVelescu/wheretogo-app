import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostShareUpdateWithoutPostInput } from "../inputs/PostShareUpdateWithoutPostInput";
import { PostShareWhereUniqueInput } from "../inputs/PostShareWhereUniqueInput";

@TypeGraphQL.InputType("PostShareUpdateWithWhereUniqueWithoutPostInput", {})
export class PostShareUpdateWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field(_type => PostShareWhereUniqueInput, {
    nullable: false
  })
  where!: PostShareWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostShareUpdateWithoutPostInput, {
    nullable: false
  })
  data!: PostShareUpdateWithoutPostInput;
}
