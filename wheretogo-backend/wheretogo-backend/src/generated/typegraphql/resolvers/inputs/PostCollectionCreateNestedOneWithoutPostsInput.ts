import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCollectionCreateOrConnectWithoutPostsInput } from "../inputs/PostCollectionCreateOrConnectWithoutPostsInput";
import { PostCollectionCreateWithoutPostsInput } from "../inputs/PostCollectionCreateWithoutPostsInput";
import { PostCollectionWhereUniqueInput } from "../inputs/PostCollectionWhereUniqueInput";

@TypeGraphQL.InputType("PostCollectionCreateNestedOneWithoutPostsInput", {})
export class PostCollectionCreateNestedOneWithoutPostsInput {
  @TypeGraphQL.Field(_type => PostCollectionCreateWithoutPostsInput, {
    nullable: true
  })
  create?: PostCollectionCreateWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => PostCollectionCreateOrConnectWithoutPostsInput, {
    nullable: true
  })
  connectOrCreate?: PostCollectionCreateOrConnectWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => PostCollectionWhereUniqueInput, {
    nullable: true
  })
  connect?: PostCollectionWhereUniqueInput | undefined;
}
