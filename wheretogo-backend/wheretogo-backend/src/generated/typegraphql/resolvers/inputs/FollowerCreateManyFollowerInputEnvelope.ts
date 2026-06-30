import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowerCreateManyFollowerInput } from "../inputs/FollowerCreateManyFollowerInput";

@TypeGraphQL.InputType("FollowerCreateManyFollowerInputEnvelope", {})
export class FollowerCreateManyFollowerInputEnvelope {
  @TypeGraphQL.Field(_type => [FollowerCreateManyFollowerInput], {
    nullable: false
  })
  data!: FollowerCreateManyFollowerInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
