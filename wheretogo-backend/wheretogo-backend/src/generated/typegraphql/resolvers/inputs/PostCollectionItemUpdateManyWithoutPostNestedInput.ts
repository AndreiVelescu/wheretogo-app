import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCollectionItemCreateManyPostInputEnvelope } from "../inputs/PostCollectionItemCreateManyPostInputEnvelope";
import { PostCollectionItemCreateOrConnectWithoutPostInput } from "../inputs/PostCollectionItemCreateOrConnectWithoutPostInput";
import { PostCollectionItemCreateWithoutPostInput } from "../inputs/PostCollectionItemCreateWithoutPostInput";
import { PostCollectionItemScalarWhereInput } from "../inputs/PostCollectionItemScalarWhereInput";
import { PostCollectionItemUpdateManyWithWhereWithoutPostInput } from "../inputs/PostCollectionItemUpdateManyWithWhereWithoutPostInput";
import { PostCollectionItemUpdateWithWhereUniqueWithoutPostInput } from "../inputs/PostCollectionItemUpdateWithWhereUniqueWithoutPostInput";
import { PostCollectionItemUpsertWithWhereUniqueWithoutPostInput } from "../inputs/PostCollectionItemUpsertWithWhereUniqueWithoutPostInput";
import { PostCollectionItemWhereUniqueInput } from "../inputs/PostCollectionItemWhereUniqueInput";

@TypeGraphQL.InputType("PostCollectionItemUpdateManyWithoutPostNestedInput", {})
export class PostCollectionItemUpdateManyWithoutPostNestedInput {
  @TypeGraphQL.Field(_type => [PostCollectionItemCreateWithoutPostInput], {
    nullable: true
  })
  create?: PostCollectionItemCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCollectionItemCreateOrConnectWithoutPostInput], {
    nullable: true
  })
  connectOrCreate?: PostCollectionItemCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCollectionItemUpsertWithWhereUniqueWithoutPostInput], {
    nullable: true
  })
  upsert?: PostCollectionItemUpsertWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => PostCollectionItemCreateManyPostInputEnvelope, {
    nullable: true
  })
  createMany?: PostCollectionItemCreateManyPostInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PostCollectionItemWhereUniqueInput], {
    nullable: true
  })
  set?: PostCollectionItemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCollectionItemWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PostCollectionItemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCollectionItemWhereUniqueInput], {
    nullable: true
  })
  delete?: PostCollectionItemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCollectionItemWhereUniqueInput], {
    nullable: true
  })
  connect?: PostCollectionItemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCollectionItemUpdateWithWhereUniqueWithoutPostInput], {
    nullable: true
  })
  update?: PostCollectionItemUpdateWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCollectionItemUpdateManyWithWhereWithoutPostInput], {
    nullable: true
  })
  updateMany?: PostCollectionItemUpdateManyWithWhereWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCollectionItemScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PostCollectionItemScalarWhereInput[] | undefined;
}
