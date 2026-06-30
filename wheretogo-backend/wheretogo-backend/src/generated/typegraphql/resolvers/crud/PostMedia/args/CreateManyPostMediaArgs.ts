import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostMediaCreateManyInput } from "../../../inputs/PostMediaCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPostMediaArgs {
  @TypeGraphQL.Field(_type => [PostMediaCreateManyInput], {
    nullable: false
  })
  data!: PostMediaCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
