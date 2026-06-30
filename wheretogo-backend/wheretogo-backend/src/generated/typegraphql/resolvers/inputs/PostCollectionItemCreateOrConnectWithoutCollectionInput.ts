import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCollectionItemCreateWithoutCollectionInput } from "../inputs/PostCollectionItemCreateWithoutCollectionInput";
import { PostCollectionItemWhereUniqueInput } from "../inputs/PostCollectionItemWhereUniqueInput";

@TypeGraphQL.InputType("PostCollectionItemCreateOrConnectWithoutCollectionInput", {})
export class PostCollectionItemCreateOrConnectWithoutCollectionInput {
  @TypeGraphQL.Field(_type => PostCollectionItemWhereUniqueInput, {
    nullable: false
  })
  where!: PostCollectionItemWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostCollectionItemCreateWithoutCollectionInput, {
    nullable: false
  })
  create!: PostCollectionItemCreateWithoutCollectionInput;
}
