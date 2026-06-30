import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutSavedPostsInput } from "../inputs/UserCreateNestedOneWithoutSavedPostsInput";

@TypeGraphQL.InputType("SavedPostCreateWithoutPostInput", {})
export class SavedPostCreateWithoutPostInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  note?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutSavedPostsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutSavedPostsInput;
}
