import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostMediaCreateWithoutPostInput } from "../inputs/PostMediaCreateWithoutPostInput";
import { PostMediaUpdateWithoutPostInput } from "../inputs/PostMediaUpdateWithoutPostInput";
import { PostMediaWhereUniqueInput } from "../inputs/PostMediaWhereUniqueInput";

@TypeGraphQL.InputType("PostMediaUpsertWithWhereUniqueWithoutPostInput", {})
export class PostMediaUpsertWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field(_type => PostMediaWhereUniqueInput, {
    nullable: false
  })
  where!: PostMediaWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostMediaUpdateWithoutPostInput, {
    nullable: false
  })
  update!: PostMediaUpdateWithoutPostInput;

  @TypeGraphQL.Field(_type => PostMediaCreateWithoutPostInput, {
    nullable: false
  })
  create!: PostMediaCreateWithoutPostInput;
}
