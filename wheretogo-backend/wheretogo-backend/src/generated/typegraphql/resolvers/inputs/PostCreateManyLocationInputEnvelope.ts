import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateManyLocationInput } from "../inputs/PostCreateManyLocationInput";

@TypeGraphQL.InputType("PostCreateManyLocationInputEnvelope", {})
export class PostCreateManyLocationInputEnvelope {
  @TypeGraphQL.Field(_type => [PostCreateManyLocationInput], {
    nullable: false
  })
  data!: PostCreateManyLocationInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
