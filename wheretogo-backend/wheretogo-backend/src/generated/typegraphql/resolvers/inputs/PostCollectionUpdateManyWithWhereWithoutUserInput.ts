import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCollectionScalarWhereInput } from "../inputs/PostCollectionScalarWhereInput";
import { PostCollectionUpdateManyMutationInput } from "../inputs/PostCollectionUpdateManyMutationInput";

@TypeGraphQL.InputType("PostCollectionUpdateManyWithWhereWithoutUserInput", {})
export class PostCollectionUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => PostCollectionScalarWhereInput, {
    nullable: false
  })
  where!: PostCollectionScalarWhereInput;

  @TypeGraphQL.Field(_type => PostCollectionUpdateManyMutationInput, {
    nullable: false
  })
  data!: PostCollectionUpdateManyMutationInput;
}
