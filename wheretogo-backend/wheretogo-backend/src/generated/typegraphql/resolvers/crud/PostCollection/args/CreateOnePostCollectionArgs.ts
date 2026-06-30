import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostCollectionCreateInput } from "../../../inputs/PostCollectionCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePostCollectionArgs {
  @TypeGraphQL.Field(_type => PostCollectionCreateInput, {
    nullable: false
  })
  data!: PostCollectionCreateInput;
}
