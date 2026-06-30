import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostCollectionWhereUniqueInput } from "../../../inputs/PostCollectionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOnePostCollectionArgs {
  @TypeGraphQL.Field(_type => PostCollectionWhereUniqueInput, {
    nullable: false
  })
  where!: PostCollectionWhereUniqueInput;
}
