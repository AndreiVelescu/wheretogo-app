import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCollectionCreateWithoutUserInput } from "../inputs/PostCollectionCreateWithoutUserInput";
import { PostCollectionUpdateWithoutUserInput } from "../inputs/PostCollectionUpdateWithoutUserInput";
import { PostCollectionWhereUniqueInput } from "../inputs/PostCollectionWhereUniqueInput";

@TypeGraphQL.InputType("PostCollectionUpsertWithWhereUniqueWithoutUserInput", {})
export class PostCollectionUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => PostCollectionWhereUniqueInput, {
    nullable: false
  })
  where!: PostCollectionWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostCollectionUpdateWithoutUserInput, {
    nullable: false
  })
  update!: PostCollectionUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => PostCollectionCreateWithoutUserInput, {
    nullable: false
  })
  create!: PostCollectionCreateWithoutUserInput;
}
