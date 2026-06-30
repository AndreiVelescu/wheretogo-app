import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutSavesInput } from "../inputs/PostCreateWithoutSavesInput";
import { PostUpdateWithoutSavesInput } from "../inputs/PostUpdateWithoutSavesInput";
import { PostWhereInput } from "../inputs/PostWhereInput";

@TypeGraphQL.InputType("PostUpsertWithoutSavesInput", {})
export class PostUpsertWithoutSavesInput {
  @TypeGraphQL.Field(_type => PostUpdateWithoutSavesInput, {
    nullable: false
  })
  update!: PostUpdateWithoutSavesInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutSavesInput, {
    nullable: false
  })
  create!: PostCreateWithoutSavesInput;

  @TypeGraphQL.Field(_type => PostWhereInput, {
    nullable: true
  })
  where?: PostWhereInput | undefined;
}
