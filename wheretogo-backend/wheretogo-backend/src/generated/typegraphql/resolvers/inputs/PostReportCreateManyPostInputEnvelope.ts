import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostReportCreateManyPostInput } from "../inputs/PostReportCreateManyPostInput";

@TypeGraphQL.InputType("PostReportCreateManyPostInputEnvelope", {})
export class PostReportCreateManyPostInputEnvelope {
  @TypeGraphQL.Field(_type => [PostReportCreateManyPostInput], {
    nullable: false
  })
  data!: PostReportCreateManyPostInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
