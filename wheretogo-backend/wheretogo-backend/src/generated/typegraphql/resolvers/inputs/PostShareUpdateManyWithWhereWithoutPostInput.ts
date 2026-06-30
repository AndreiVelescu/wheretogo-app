import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostShareScalarWhereInput } from "../inputs/PostShareScalarWhereInput";
import { PostShareUpdateManyMutationInput } from "../inputs/PostShareUpdateManyMutationInput";

@TypeGraphQL.InputType("PostShareUpdateManyWithWhereWithoutPostInput", {})
export class PostShareUpdateManyWithWhereWithoutPostInput {
  @TypeGraphQL.Field(_type => PostShareScalarWhereInput, {
    nullable: false
  })
  where!: PostShareScalarWhereInput;

  @TypeGraphQL.Field(_type => PostShareUpdateManyMutationInput, {
    nullable: false
  })
  data!: PostShareUpdateManyMutationInput;
}
