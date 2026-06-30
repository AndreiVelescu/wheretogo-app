import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostMediaOrderByWithRelationInput } from "../../../inputs/PostMediaOrderByWithRelationInput";
import { PostMediaWhereInput } from "../../../inputs/PostMediaWhereInput";
import { PostMediaWhereUniqueInput } from "../../../inputs/PostMediaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePostMediaArgs {
  @TypeGraphQL.Field(_type => PostMediaWhereInput, {
    nullable: true
  })
  where?: PostMediaWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PostMediaOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PostMediaOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PostMediaWhereUniqueInput, {
    nullable: true
  })
  cursor?: PostMediaWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
