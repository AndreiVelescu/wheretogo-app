import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCollectionItemCreateManyPostInputEnvelope } from "../inputs/PostCollectionItemCreateManyPostInputEnvelope";
import { PostCollectionItemCreateOrConnectWithoutPostInput } from "../inputs/PostCollectionItemCreateOrConnectWithoutPostInput";
import { PostCollectionItemCreateWithoutPostInput } from "../inputs/PostCollectionItemCreateWithoutPostInput";
import { PostCollectionItemWhereUniqueInput } from "../inputs/PostCollectionItemWhereUniqueInput";

@TypeGraphQL.InputType("PostCollectionItemCreateNestedManyWithoutPostInput", {})
export class PostCollectionItemCreateNestedManyWithoutPostInput {
  @TypeGraphQL.Field(_type => [PostCollectionItemCreateWithoutPostInput], {
    nullable: true
  })
  create?: PostCollectionItemCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCollectionItemCreateOrConnectWithoutPostInput], {
    nullable: true
  })
  connectOrCreate?: PostCollectionItemCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => PostCollectionItemCreateManyPostInputEnvelope, {
    nullable: true
  })
  createMany?: PostCollectionItemCreateManyPostInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PostCollectionItemWhereUniqueInput], {
    nullable: true
  })
  connect?: PostCollectionItemWhereUniqueInput[] | undefined;
}
