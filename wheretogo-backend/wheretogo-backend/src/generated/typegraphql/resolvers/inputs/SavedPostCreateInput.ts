import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateNestedOneWithoutSavesInput } from "../inputs/PostCreateNestedOneWithoutSavesInput";
import { UserCreateNestedOneWithoutSavedPostsInput } from "../inputs/UserCreateNestedOneWithoutSavedPostsInput";

@TypeGraphQL.InputType("SavedPostCreateInput", {})
export class SavedPostCreateInput {
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

  @TypeGraphQL.Field(_type => PostCreateNestedOneWithoutSavesInput, {
    nullable: false
  })
  post!: PostCreateNestedOneWithoutSavesInput;
}
