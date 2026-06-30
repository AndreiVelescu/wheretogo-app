import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostReportCreateManyReporterInput } from "../inputs/PostReportCreateManyReporterInput";

@TypeGraphQL.InputType("PostReportCreateManyReporterInputEnvelope", {})
export class PostReportCreateManyReporterInputEnvelope {
  @TypeGraphQL.Field(_type => [PostReportCreateManyReporterInput], {
    nullable: false
  })
  data!: PostReportCreateManyReporterInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
