import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostUpdateWithoutCollectionsInput } from "../inputs/PostUpdateWithoutCollectionsInput";
import { PostWhereInput } from "../inputs/PostWhereInput";

@TypeGraphQL.InputType("PostUpdateToOneWithWhereWithoutCollectionsInput", {})
export class PostUpdateToOneWithWhereWithoutCollectionsInput {
  @TypeGraphQL.Field(_type => PostWhereInput, {
    nullable: true
  })
  where?: PostWhereInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateWithoutCollectionsInput, {
    nullable: false
  })
  data!: PostUpdateWithoutCollectionsInput;
}
