import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostUpdateWithoutReportsInput } from "../inputs/PostUpdateWithoutReportsInput";
import { PostWhereInput } from "../inputs/PostWhereInput";

@TypeGraphQL.InputType("PostUpdateToOneWithWhereWithoutReportsInput", {})
export class PostUpdateToOneWithWhereWithoutReportsInput {
  @TypeGraphQL.Field(_type => PostWhereInput, {
    nullable: true
  })
  where?: PostWhereInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateWithoutReportsInput, {
    nullable: false
  })
  data!: PostUpdateWithoutReportsInput;
}
