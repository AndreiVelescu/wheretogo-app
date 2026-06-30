import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCollectionItemCreateWithoutCollectionInput } from "../inputs/PostCollectionItemCreateWithoutCollectionInput";
import { PostCollectionItemUpdateWithoutCollectionInput } from "../inputs/PostCollectionItemUpdateWithoutCollectionInput";
import { PostCollectionItemWhereUniqueInput } from "../inputs/PostCollectionItemWhereUniqueInput";

@TypeGraphQL.InputType("PostCollectionItemUpsertWithWhereUniqueWithoutCollectionInput", {})
export class PostCollectionItemUpsertWithWhereUniqueWithoutCollectionInput {
  @TypeGraphQL.Field(_type => PostCollectionItemWhereUniqueInput, {
    nullable: false
  })
  where!: PostCollectionItemWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostCollectionItemUpdateWithoutCollectionInput, {
    nullable: false
  })
  update!: PostCollectionItemUpdateWithoutCollectionInput;

  @TypeGraphQL.Field(_type => PostCollectionItemCreateWithoutCollectionInput, {
    nullable: false
  })
  create!: PostCollectionItemCreateWithoutCollectionInput;
}
