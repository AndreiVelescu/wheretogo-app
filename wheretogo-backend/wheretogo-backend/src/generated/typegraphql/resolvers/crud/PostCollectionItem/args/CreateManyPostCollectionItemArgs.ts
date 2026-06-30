import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostCollectionItemCreateManyInput } from "../../../inputs/PostCollectionItemCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPostCollectionItemArgs {
  @TypeGraphQL.Field(_type => [PostCollectionItemCreateManyInput], {
    nullable: false
  })
  data!: PostCollectionItemCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
