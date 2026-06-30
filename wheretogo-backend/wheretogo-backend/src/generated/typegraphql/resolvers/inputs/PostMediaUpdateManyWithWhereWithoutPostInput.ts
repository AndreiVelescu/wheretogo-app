import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostMediaScalarWhereInput } from "../inputs/PostMediaScalarWhereInput";
import { PostMediaUpdateManyMutationInput } from "../inputs/PostMediaUpdateManyMutationInput";

@TypeGraphQL.InputType("PostMediaUpdateManyWithWhereWithoutPostInput", {})
export class PostMediaUpdateManyWithWhereWithoutPostInput {
  @TypeGraphQL.Field(_type => PostMediaScalarWhereInput, {
    nullable: false
  })
  where!: PostMediaScalarWhereInput;

  @TypeGraphQL.Field(_type => PostMediaUpdateManyMutationInput, {
    nullable: false
  })
  data!: PostMediaUpdateManyMutationInput;
}
