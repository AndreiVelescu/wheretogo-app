import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCollectionItemCreateManyPostInput } from "../inputs/PostCollectionItemCreateManyPostInput";

@TypeGraphQL.InputType("PostCollectionItemCreateManyPostInputEnvelope", {})
export class PostCollectionItemCreateManyPostInputEnvelope {
  @TypeGraphQL.Field(_type => [PostCollectionItemCreateManyPostInput], {
    nullable: false
  })
  data!: PostCollectionItemCreateManyPostInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
