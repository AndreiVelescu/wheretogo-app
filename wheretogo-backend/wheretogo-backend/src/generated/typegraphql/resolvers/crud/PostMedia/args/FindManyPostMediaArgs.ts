import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostMediaOrderByWithRelationInput } from "../../../inputs/PostMediaOrderByWithRelationInput";
import { PostMediaWhereInput } from "../../../inputs/PostMediaWhereInput";
import { PostMediaWhereUniqueInput } from "../../../inputs/PostMediaWhereUniqueInput";
import { PostMediaScalarFieldEnum } from "../../../../enums/PostMediaScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyPostMediaArgs {
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

  @TypeGraphQL.Field(_type => [PostMediaScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "postId" | "type" | "url" | "thumbnail" | "order" | "width" | "height" | "duration" | "createdAt"> | undefined;
}
