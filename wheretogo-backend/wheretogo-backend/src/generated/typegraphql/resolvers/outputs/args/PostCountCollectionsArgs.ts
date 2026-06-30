import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostCollectionItemWhereInput } from "../../inputs/PostCollectionItemWhereInput";

@TypeGraphQL.ArgsType()
export class PostCountCollectionsArgs {
  @TypeGraphQL.Field(_type => PostCollectionItemWhereInput, {
    nullable: true
  })
  where?: PostCollectionItemWhereInput | undefined;
}
