import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCollectionItemCreateManyCollectionInputEnvelope } from "../inputs/PostCollectionItemCreateManyCollectionInputEnvelope";
import { PostCollectionItemCreateOrConnectWithoutCollectionInput } from "../inputs/PostCollectionItemCreateOrConnectWithoutCollectionInput";
import { PostCollectionItemCreateWithoutCollectionInput } from "../inputs/PostCollectionItemCreateWithoutCollectionInput";
import { PostCollectionItemWhereUniqueInput } from "../inputs/PostCollectionItemWhereUniqueInput";

@TypeGraphQL.InputType("PostCollectionItemCreateNestedManyWithoutCollectionInput", {})
export class PostCollectionItemCreateNestedManyWithoutCollectionInput {
  @TypeGraphQL.Field(_type => [PostCollectionItemCreateWithoutCollectionInput], {
    nullable: true
  })
  create?: PostCollectionItemCreateWithoutCollectionInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCollectionItemCreateOrConnectWithoutCollectionInput], {
    nullable: true
  })
  connectOrCreate?: PostCollectionItemCreateOrConnectWithoutCollectionInput[] | undefined;

  @TypeGraphQL.Field(_type => PostCollectionItemCreateManyCollectionInputEnvelope, {
    nullable: true
  })
  createMany?: PostCollectionItemCreateManyCollectionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PostCollectionItemWhereUniqueInput], {
    nullable: true
  })
  connect?: PostCollectionItemWhereUniqueInput[] | undefined;
}
