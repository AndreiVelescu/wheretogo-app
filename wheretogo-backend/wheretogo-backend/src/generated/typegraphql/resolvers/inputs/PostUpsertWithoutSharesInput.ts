import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutSharesInput } from "../inputs/PostCreateWithoutSharesInput";
import { PostUpdateWithoutSharesInput } from "../inputs/PostUpdateWithoutSharesInput";
import { PostWhereInput } from "../inputs/PostWhereInput";

@TypeGraphQL.InputType("PostUpsertWithoutSharesInput", {})
export class PostUpsertWithoutSharesInput {
  @TypeGraphQL.Field(_type => PostUpdateWithoutSharesInput, {
    nullable: false
  })
  update!: PostUpdateWithoutSharesInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutSharesInput, {
    nullable: false
  })
  create!: PostCreateWithoutSharesInput;

  @TypeGraphQL.Field(_type => PostWhereInput, {
    nullable: true
  })
  where?: PostWhereInput | undefined;
}
