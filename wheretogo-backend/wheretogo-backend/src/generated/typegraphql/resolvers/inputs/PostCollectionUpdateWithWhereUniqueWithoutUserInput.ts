import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCollectionUpdateWithoutUserInput } from "../inputs/PostCollectionUpdateWithoutUserInput";
import { PostCollectionWhereUniqueInput } from "../inputs/PostCollectionWhereUniqueInput";

@TypeGraphQL.InputType("PostCollectionUpdateWithWhereUniqueWithoutUserInput", {})
export class PostCollectionUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => PostCollectionWhereUniqueInput, {
    nullable: false
  })
  where!: PostCollectionWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostCollectionUpdateWithoutUserInput, {
    nullable: false
  })
  data!: PostCollectionUpdateWithoutUserInput;
}
