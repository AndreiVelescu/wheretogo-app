import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostCollectionCreateManyInput } from "../../../inputs/PostCollectionCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnPostCollectionArgs {
  @TypeGraphQL.Field(_type => [PostCollectionCreateManyInput], {
    nullable: false
  })
  data!: PostCollectionCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
