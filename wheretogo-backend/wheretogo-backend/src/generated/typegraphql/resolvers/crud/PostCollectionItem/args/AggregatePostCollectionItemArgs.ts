import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostCollectionItemOrderByWithRelationInput } from "../../../inputs/PostCollectionItemOrderByWithRelationInput";
import { PostCollectionItemWhereInput } from "../../../inputs/PostCollectionItemWhereInput";
import { PostCollectionItemWhereUniqueInput } from "../../../inputs/PostCollectionItemWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePostCollectionItemArgs {
  @TypeGraphQL.Field(_type => PostCollectionItemWhereInput, {
    nullable: true
  })
  where?: PostCollectionItemWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PostCollectionItemOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PostCollectionItemOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PostCollectionItemWhereUniqueInput, {
    nullable: true
  })
  cursor?: PostCollectionItemWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
