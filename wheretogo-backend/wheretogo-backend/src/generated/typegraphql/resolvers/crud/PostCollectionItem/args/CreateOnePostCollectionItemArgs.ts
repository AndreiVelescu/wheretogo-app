import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostCollectionItemCreateInput } from "../../../inputs/PostCollectionItemCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePostCollectionItemArgs {
  @TypeGraphQL.Field(_type => PostCollectionItemCreateInput, {
    nullable: false
  })
  data!: PostCollectionItemCreateInput;
}
