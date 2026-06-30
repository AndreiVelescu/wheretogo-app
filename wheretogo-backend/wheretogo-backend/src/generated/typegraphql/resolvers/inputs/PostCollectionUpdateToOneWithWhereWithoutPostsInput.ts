import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCollectionUpdateWithoutPostsInput } from "../inputs/PostCollectionUpdateWithoutPostsInput";
import { PostCollectionWhereInput } from "../inputs/PostCollectionWhereInput";

@TypeGraphQL.InputType("PostCollectionUpdateToOneWithWhereWithoutPostsInput", {})
export class PostCollectionUpdateToOneWithWhereWithoutPostsInput {
  @TypeGraphQL.Field(_type => PostCollectionWhereInput, {
    nullable: true
  })
  where?: PostCollectionWhereInput | undefined;

  @TypeGraphQL.Field(_type => PostCollectionUpdateWithoutPostsInput, {
    nullable: false
  })
  data!: PostCollectionUpdateWithoutPostsInput;
}
