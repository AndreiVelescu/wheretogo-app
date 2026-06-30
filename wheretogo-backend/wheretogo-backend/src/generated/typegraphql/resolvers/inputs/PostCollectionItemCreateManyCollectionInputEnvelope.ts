import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCollectionItemCreateManyCollectionInput } from "../inputs/PostCollectionItemCreateManyCollectionInput";

@TypeGraphQL.InputType("PostCollectionItemCreateManyCollectionInputEnvelope", {})
export class PostCollectionItemCreateManyCollectionInputEnvelope {
  @TypeGraphQL.Field(_type => [PostCollectionItemCreateManyCollectionInput], {
    nullable: false
  })
  data!: PostCollectionItemCreateManyCollectionInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
