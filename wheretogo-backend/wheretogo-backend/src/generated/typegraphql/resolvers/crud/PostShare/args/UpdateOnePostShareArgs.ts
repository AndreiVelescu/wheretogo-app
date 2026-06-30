import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostShareUpdateInput } from "../../../inputs/PostShareUpdateInput";
import { PostShareWhereUniqueInput } from "../../../inputs/PostShareWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePostShareArgs {
  @TypeGraphQL.Field(_type => PostShareUpdateInput, {
    nullable: false
  })
  data!: PostShareUpdateInput;

  @TypeGraphQL.Field(_type => PostShareWhereUniqueInput, {
    nullable: false
  })
  where!: PostShareWhereUniqueInput;
}
