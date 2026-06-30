import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostMediaCreateWithoutPostInput } from "../inputs/PostMediaCreateWithoutPostInput";
import { PostMediaWhereUniqueInput } from "../inputs/PostMediaWhereUniqueInput";

@TypeGraphQL.InputType("PostMediaCreateOrConnectWithoutPostInput", {})
export class PostMediaCreateOrConnectWithoutPostInput {
  @TypeGraphQL.Field(_type => PostMediaWhereUniqueInput, {
    nullable: false
  })
  where!: PostMediaWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostMediaCreateWithoutPostInput, {
    nullable: false
  })
  create!: PostMediaCreateWithoutPostInput;
}
