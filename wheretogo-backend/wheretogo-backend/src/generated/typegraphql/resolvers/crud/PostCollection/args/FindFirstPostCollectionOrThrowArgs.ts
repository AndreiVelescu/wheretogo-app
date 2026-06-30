import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostCollectionOrderByWithRelationInput } from "../../../inputs/PostCollectionOrderByWithRelationInput";
import { PostCollectionWhereInput } from "../../../inputs/PostCollectionWhereInput";
import { PostCollectionWhereUniqueInput } from "../../../inputs/PostCollectionWhereUniqueInput";
import { PostCollectionScalarFieldEnum } from "../../../../enums/PostCollectionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstPostCollectionOrThrowArgs {
  @TypeGraphQL.Field(_type => PostCollectionWhereInput, {
    nullable: true
  })
  where?: PostCollectionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PostCollectionOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PostCollectionOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PostCollectionWhereUniqueInput, {
    nullable: true
  })
  cursor?: PostCollectionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PostCollectionScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "userId" | "name" | "description" | "isPublic" | "coverImage" | "createdAt" | "updatedAt"> | undefined;
}
