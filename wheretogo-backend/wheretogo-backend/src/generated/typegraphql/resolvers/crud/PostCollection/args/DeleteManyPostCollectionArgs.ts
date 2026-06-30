import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostCollectionWhereInput } from "../../../inputs/PostCollectionWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPostCollectionArgs {
  @TypeGraphQL.Field(_type => PostCollectionWhereInput, {
    nullable: true
  })
  where?: PostCollectionWhereInput | undefined;
}
