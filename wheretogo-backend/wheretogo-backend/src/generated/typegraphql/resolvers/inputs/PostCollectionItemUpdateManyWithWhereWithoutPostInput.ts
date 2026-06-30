import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCollectionItemScalarWhereInput } from "../inputs/PostCollectionItemScalarWhereInput";
import { PostCollectionItemUpdateManyMutationInput } from "../inputs/PostCollectionItemUpdateManyMutationInput";

@TypeGraphQL.InputType("PostCollectionItemUpdateManyWithWhereWithoutPostInput", {})
export class PostCollectionItemUpdateManyWithWhereWithoutPostInput {
  @TypeGraphQL.Field(_type => PostCollectionItemScalarWhereInput, {
    nullable: false
  })
  where!: PostCollectionItemScalarWhereInput;

  @TypeGraphQL.Field(_type => PostCollectionItemUpdateManyMutationInput, {
    nullable: false
  })
  data!: PostCollectionItemUpdateManyMutationInput;
}
