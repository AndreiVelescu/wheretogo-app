import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostReportScalarWhereInput } from "../inputs/PostReportScalarWhereInput";
import { PostReportUpdateManyMutationInput } from "../inputs/PostReportUpdateManyMutationInput";

@TypeGraphQL.InputType("PostReportUpdateManyWithWhereWithoutPostInput", {})
export class PostReportUpdateManyWithWhereWithoutPostInput {
  @TypeGraphQL.Field(_type => PostReportScalarWhereInput, {
    nullable: false
  })
  where!: PostReportScalarWhereInput;

  @TypeGraphQL.Field(_type => PostReportUpdateManyMutationInput, {
    nullable: false
  })
  data!: PostReportUpdateManyMutationInput;
}
