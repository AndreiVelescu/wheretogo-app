import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCollectionCreateManyUserInputEnvelope } from "../inputs/PostCollectionCreateManyUserInputEnvelope";
import { PostCollectionCreateOrConnectWithoutUserInput } from "../inputs/PostCollectionCreateOrConnectWithoutUserInput";
import { PostCollectionCreateWithoutUserInput } from "../inputs/PostCollectionCreateWithoutUserInput";
import { PostCollectionWhereUniqueInput } from "../inputs/PostCollectionWhereUniqueInput";

@TypeGraphQL.InputType("PostCollectionCreateNestedManyWithoutUserInput", {})
export class PostCollectionCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [PostCollectionCreateWithoutUserInput], {
    nullable: true
  })
  create?: PostCollectionCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCollectionCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: PostCollectionCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => PostCollectionCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: PostCollectionCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PostCollectionWhereUniqueInput], {
    nullable: true
  })
  connect?: PostCollectionWhereUniqueInput[] | undefined;
}
