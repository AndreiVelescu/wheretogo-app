import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostShareCreateManyPostInput } from "../inputs/PostShareCreateManyPostInput";

@TypeGraphQL.InputType("PostShareCreateManyPostInputEnvelope", {})
export class PostShareCreateManyPostInputEnvelope {
  @TypeGraphQL.Field(_type => [PostShareCreateManyPostInput], {
    nullable: false
  })
  data!: PostShareCreateManyPostInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
