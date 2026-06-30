import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutReportsInput } from "../inputs/PostCreateWithoutReportsInput";
import { PostUpdateWithoutReportsInput } from "../inputs/PostUpdateWithoutReportsInput";
import { PostWhereInput } from "../inputs/PostWhereInput";

@TypeGraphQL.InputType("PostUpsertWithoutReportsInput", {})
export class PostUpsertWithoutReportsInput {
  @TypeGraphQL.Field(_type => PostUpdateWithoutReportsInput, {
    nullable: false
  })
  update!: PostUpdateWithoutReportsInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutReportsInput, {
    nullable: false
  })
  create!: PostCreateWithoutReportsInput;

  @TypeGraphQL.Field(_type => PostWhereInput, {
    nullable: true
  })
  where?: PostWhereInput | undefined;
}
