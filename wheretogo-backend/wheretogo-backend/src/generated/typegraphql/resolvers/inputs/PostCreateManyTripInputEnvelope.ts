import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateManyTripInput } from "../inputs/PostCreateManyTripInput";

@TypeGraphQL.InputType("PostCreateManyTripInputEnvelope", {})
export class PostCreateManyTripInputEnvelope {
  @TypeGraphQL.Field(_type => [PostCreateManyTripInput], {
    nullable: false
  })
  data!: PostCreateManyTripInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
