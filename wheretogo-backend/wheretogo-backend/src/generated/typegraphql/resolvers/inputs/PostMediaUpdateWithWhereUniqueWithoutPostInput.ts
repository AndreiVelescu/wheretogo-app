import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostMediaUpdateWithoutPostInput } from "../inputs/PostMediaUpdateWithoutPostInput";
import { PostMediaWhereUniqueInput } from "../inputs/PostMediaWhereUniqueInput";

@TypeGraphQL.InputType("PostMediaUpdateWithWhereUniqueWithoutPostInput", {})
export class PostMediaUpdateWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field(_type => PostMediaWhereUniqueInput, {
    nullable: false
  })
  where!: PostMediaWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostMediaUpdateWithoutPostInput, {
    nullable: false
  })
  data!: PostMediaUpdateWithoutPostInput;
}
