import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCollectionCreateWithoutPostsInput } from "../inputs/PostCollectionCreateWithoutPostsInput";
import { PostCollectionWhereUniqueInput } from "../inputs/PostCollectionWhereUniqueInput";

@TypeGraphQL.InputType("PostCollectionCreateOrConnectWithoutPostsInput", {})
export class PostCollectionCreateOrConnectWithoutPostsInput {
  @TypeGraphQL.Field(_type => PostCollectionWhereUniqueInput, {
    nullable: false
  })
  where!: PostCollectionWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostCollectionCreateWithoutPostsInput, {
    nullable: false
  })
  create!: PostCollectionCreateWithoutPostsInput;
}
