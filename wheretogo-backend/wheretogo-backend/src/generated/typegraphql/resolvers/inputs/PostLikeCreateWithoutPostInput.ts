import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutPostLikesInput } from "../inputs/UserCreateNestedOneWithoutPostLikesInput";

@TypeGraphQL.InputType("PostLikeCreateWithoutPostInput", {})
export class PostLikeCreateWithoutPostInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPostLikesInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutPostLikesInput;
}
