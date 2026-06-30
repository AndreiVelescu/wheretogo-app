import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReviewCreateManyLocationInput } from "../inputs/ReviewCreateManyLocationInput";

@TypeGraphQL.InputType("ReviewCreateManyLocationInputEnvelope", {})
export class ReviewCreateManyLocationInputEnvelope {
  @TypeGraphQL.Field(_type => [ReviewCreateManyLocationInput], {
    nullable: false
  })
  data!: ReviewCreateManyLocationInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
