import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostUpdateWithoutSavesInput } from "../inputs/PostUpdateWithoutSavesInput";
import { PostWhereInput } from "../inputs/PostWhereInput";

@TypeGraphQL.InputType("PostUpdateToOneWithWhereWithoutSavesInput", {})
export class PostUpdateToOneWithWhereWithoutSavesInput {
  @TypeGraphQL.Field(_type => PostWhereInput, {
    nullable: true
  })
  where?: PostWhereInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateWithoutSavesInput, {
    nullable: false
  })
  data!: PostUpdateWithoutSavesInput;
}
