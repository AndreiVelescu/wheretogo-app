import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostShareOrderByWithRelationInput } from "../../../inputs/PostShareOrderByWithRelationInput";
import { PostShareWhereInput } from "../../../inputs/PostShareWhereInput";
import { PostShareWhereUniqueInput } from "../../../inputs/PostShareWhereUniqueInput";
import { PostShareScalarFieldEnum } from "../../../../enums/PostShareScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyPostShareArgs {
  @TypeGraphQL.Field(_type => PostShareWhereInput, {
    nullable: true
  })
  where?: PostShareWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PostShareOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PostShareOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PostShareWhereUniqueInput, {
    nullable: true
  })
  cursor?: PostShareWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PostShareScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "userId" | "postId" | "platform" | "createdAt"> | undefined;
}
