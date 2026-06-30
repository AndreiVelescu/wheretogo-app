import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostShareCreateInput } from "../../../inputs/PostShareCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePostShareArgs {
  @TypeGraphQL.Field(_type => PostShareCreateInput, {
    nullable: false
  })
  data!: PostShareCreateInput;
}
