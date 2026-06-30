import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateNestedOneWithoutSavesInput } from "../inputs/PostCreateNestedOneWithoutSavesInput";

@TypeGraphQL.InputType("SavedPostCreateWithoutUserInput", {})
export class SavedPostCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  note?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => PostCreateNestedOneWithoutSavesInput, {
    nullable: false
  })
  post!: PostCreateNestedOneWithoutSavesInput;
}
