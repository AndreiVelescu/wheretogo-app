import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostCollectionItemWhereUniqueInput } from "../../../inputs/PostCollectionItemWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePostCollectionItemArgs {
  @TypeGraphQL.Field(_type => PostCollectionItemWhereUniqueInput, {
    nullable: false
  })
  where!: PostCollectionItemWhereUniqueInput;
}
