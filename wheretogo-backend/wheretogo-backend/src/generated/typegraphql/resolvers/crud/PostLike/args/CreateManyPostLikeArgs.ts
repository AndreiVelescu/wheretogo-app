import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostLikeCreateManyInput } from "../../../inputs/PostLikeCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPostLikeArgs {
  @TypeGraphQL.Field(_type => [PostLikeCreateManyInput], {
    nullable: false
  })
  data!: PostLikeCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
