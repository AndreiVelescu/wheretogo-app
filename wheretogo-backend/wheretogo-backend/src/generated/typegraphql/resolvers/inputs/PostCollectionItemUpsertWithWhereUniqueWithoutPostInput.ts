import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCollectionItemCreateWithoutPostInput } from "../inputs/PostCollectionItemCreateWithoutPostInput";
import { PostCollectionItemUpdateWithoutPostInput } from "../inputs/PostCollectionItemUpdateWithoutPostInput";
import { PostCollectionItemWhereUniqueInput } from "../inputs/PostCollectionItemWhereUniqueInput";

@TypeGraphQL.InputType("PostCollectionItemUpsertWithWhereUniqueWithoutPostInput", {})
export class PostCollectionItemUpsertWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field(_type => PostCollectionItemWhereUniqueInput, {
    nullable: false
  })
  where!: PostCollectionItemWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostCollectionItemUpdateWithoutPostInput, {
    nullable: false
  })
  update!: PostCollectionItemUpdateWithoutPostInput;

  @TypeGraphQL.Field(_type => PostCollectionItemCreateWithoutPostInput, {
    nullable: false
  })
  create!: PostCollectionItemCreateWithoutPostInput;
}
