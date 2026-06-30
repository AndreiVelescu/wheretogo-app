import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UploadSessionCreateManyUserInput } from "../inputs/UploadSessionCreateManyUserInput";

@TypeGraphQL.InputType("UploadSessionCreateManyUserInputEnvelope", {})
export class UploadSessionCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [UploadSessionCreateManyUserInput], {
    nullable: false
  })
  data!: UploadSessionCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
