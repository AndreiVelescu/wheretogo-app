import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostShareCreateWithoutPostInput } from "../inputs/PostShareCreateWithoutPostInput";
import { PostShareWhereUniqueInput } from "../inputs/PostShareWhereUniqueInput";

@TypeGraphQL.InputType("PostShareCreateOrConnectWithoutPostInput", {})
export class PostShareCreateOrConnectWithoutPostInput {
  @TypeGraphQL.Field(_type => PostShareWhereUniqueInput, {
    nullable: false
  })
  where!: PostShareWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostShareCreateWithoutPostInput, {
    nullable: false
  })
  create!: PostShareCreateWithoutPostInput;
}
