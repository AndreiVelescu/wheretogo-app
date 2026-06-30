import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCollectionCreateOrConnectWithoutPostsInput } from "../inputs/PostCollectionCreateOrConnectWithoutPostsInput";
import { PostCollectionCreateWithoutPostsInput } from "../inputs/PostCollectionCreateWithoutPostsInput";
import { PostCollectionUpdateToOneWithWhereWithoutPostsInput } from "../inputs/PostCollectionUpdateToOneWithWhereWithoutPostsInput";
import { PostCollectionUpsertWithoutPostsInput } from "../inputs/PostCollectionUpsertWithoutPostsInput";
import { PostCollectionWhereUniqueInput } from "../inputs/PostCollectionWhereUniqueInput";

@TypeGraphQL.InputType("PostCollectionUpdateOneRequiredWithoutPostsNestedInput", {})
export class PostCollectionUpdateOneRequiredWithoutPostsNestedInput {
  @TypeGraphQL.Field(_type => PostCollectionCreateWithoutPostsInput, {
    nullable: true
  })
  create?: PostCollectionCreateWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => PostCollectionCreateOrConnectWithoutPostsInput, {
    nullable: true
  })
  connectOrCreate?: PostCollectionCreateOrConnectWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => PostCollectionUpsertWithoutPostsInput, {
    nullable: true
  })
  upsert?: PostCollectionUpsertWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => PostCollectionWhereUniqueInput, {
    nullable: true
  })
  connect?: PostCollectionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PostCollectionUpdateToOneWithWhereWithoutPostsInput, {
    nullable: true
  })
  update?: PostCollectionUpdateToOneWithWhereWithoutPostsInput | undefined;
}
