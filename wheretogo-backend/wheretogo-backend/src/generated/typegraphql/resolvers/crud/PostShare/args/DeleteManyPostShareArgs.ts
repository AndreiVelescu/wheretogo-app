import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostShareWhereInput } from "../../../inputs/PostShareWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPostShareArgs {
  @TypeGraphQL.Field(_type => PostShareWhereInput, {
    nullable: true
  })
  where?: PostShareWhereInput | undefined;
}
