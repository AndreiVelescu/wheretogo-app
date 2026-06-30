import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutMediaInput } from "../inputs/PostCreateWithoutMediaInput";
import { PostUpdateWithoutMediaInput } from "../inputs/PostUpdateWithoutMediaInput";
import { PostWhereInput } from "../inputs/PostWhereInput";

@TypeGraphQL.InputType("PostUpsertWithoutMediaInput", {})
export class PostUpsertWithoutMediaInput {
  @TypeGraphQL.Field(_type => PostUpdateWithoutMediaInput, {
    nullable: false
  })
  update!: PostUpdateWithoutMediaInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutMediaInput, {
    nullable: false
  })
  create!: PostCreateWithoutMediaInput;

  @TypeGraphQL.Field(_type => PostWhereInput, {
    nullable: true
  })
  where?: PostWhereInput | undefined;
}
