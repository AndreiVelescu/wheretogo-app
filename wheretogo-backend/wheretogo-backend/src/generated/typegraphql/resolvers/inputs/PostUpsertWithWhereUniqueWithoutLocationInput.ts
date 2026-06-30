import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutLocationInput } from "../inputs/PostCreateWithoutLocationInput";
import { PostUpdateWithoutLocationInput } from "../inputs/PostUpdateWithoutLocationInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostUpsertWithWhereUniqueWithoutLocationInput", {})
export class PostUpsertWithWhereUniqueWithoutLocationInput {
  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostUpdateWithoutLocationInput, {
    nullable: false
  })
  update!: PostUpdateWithoutLocationInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutLocationInput, {
    nullable: false
  })
  create!: PostCreateWithoutLocationInput;
}
