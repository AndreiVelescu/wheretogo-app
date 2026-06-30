import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostMediaCreateInput } from "../../../inputs/PostMediaCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePostMediaArgs {
  @TypeGraphQL.Field(_type => PostMediaCreateInput, {
    nullable: false
  })
  data!: PostMediaCreateInput;
}
