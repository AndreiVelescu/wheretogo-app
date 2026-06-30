import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCollectionCreateManyUserInput } from "../inputs/PostCollectionCreateManyUserInput";

@TypeGraphQL.InputType("PostCollectionCreateManyUserInputEnvelope", {})
export class PostCollectionCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [PostCollectionCreateManyUserInput], {
    nullable: false
  })
  data!: PostCollectionCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
