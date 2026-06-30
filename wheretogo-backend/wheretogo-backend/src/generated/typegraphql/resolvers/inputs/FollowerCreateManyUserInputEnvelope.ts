import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowerCreateManyUserInput } from "../inputs/FollowerCreateManyUserInput";

@TypeGraphQL.InputType("FollowerCreateManyUserInputEnvelope", {})
export class FollowerCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [FollowerCreateManyUserInput], {
    nullable: false
  })
  data!: FollowerCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
