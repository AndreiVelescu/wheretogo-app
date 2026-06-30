import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostShareCreateWithoutUserInput } from "../inputs/PostShareCreateWithoutUserInput";
import { PostShareWhereUniqueInput } from "../inputs/PostShareWhereUniqueInput";

@TypeGraphQL.InputType("PostShareCreateOrConnectWithoutUserInput", {})
export class PostShareCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => PostShareWhereUniqueInput, {
    nullable: false
  })
  where!: PostShareWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostShareCreateWithoutUserInput, {
    nullable: false
  })
  create!: PostShareCreateWithoutUserInput;
}
