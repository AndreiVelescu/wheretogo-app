import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostMediaWhereInput } from "../../inputs/PostMediaWhereInput";

@TypeGraphQL.ArgsType()
export class PostCountMediaArgs {
  @TypeGraphQL.Field(_type => PostMediaWhereInput, {
    nullable: true
  })
  where?: PostMediaWhereInput | undefined;
}
