import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCollectionItemCreateNestedManyWithoutCollectionInput } from "../inputs/PostCollectionItemCreateNestedManyWithoutCollectionInput";
import { UserCreateNestedOneWithoutCollectionsInput } from "../inputs/UserCreateNestedOneWithoutCollectionsInput";

@TypeGraphQL.InputType("PostCollectionCreateInput", {})
export class PostCollectionCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isPublic?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  coverImage?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCollectionsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutCollectionsInput;

  @TypeGraphQL.Field(_type => PostCollectionItemCreateNestedManyWithoutCollectionInput, {
    nullable: true
  })
  posts?: PostCollectionItemCreateNestedManyWithoutCollectionInput | undefined;
}
