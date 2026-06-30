import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCollectionItemUpdateWithoutPostInput } from "../inputs/PostCollectionItemUpdateWithoutPostInput";
import { PostCollectionItemWhereUniqueInput } from "../inputs/PostCollectionItemWhereUniqueInput";

@TypeGraphQL.InputType("PostCollectionItemUpdateWithWhereUniqueWithoutPostInput", {})
export class PostCollectionItemUpdateWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field(_type => PostCollectionItemWhereUniqueInput, {
    nullable: false
  })
  where!: PostCollectionItemWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostCollectionItemUpdateWithoutPostInput, {
    nullable: false
  })
  data!: PostCollectionItemUpdateWithoutPostInput;
}
