import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCollectionItemCreateWithoutPostInput } from "../inputs/PostCollectionItemCreateWithoutPostInput";
import { PostCollectionItemWhereUniqueInput } from "../inputs/PostCollectionItemWhereUniqueInput";

@TypeGraphQL.InputType("PostCollectionItemCreateOrConnectWithoutPostInput", {})
export class PostCollectionItemCreateOrConnectWithoutPostInput {
  @TypeGraphQL.Field(_type => PostCollectionItemWhereUniqueInput, {
    nullable: false
  })
  where!: PostCollectionItemWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostCollectionItemCreateWithoutPostInput, {
    nullable: false
  })
  create!: PostCollectionItemCreateWithoutPostInput;
}
