import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutTripInput } from "../inputs/PostCreateWithoutTripInput";
import { PostUpdateWithoutTripInput } from "../inputs/PostUpdateWithoutTripInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostUpsertWithWhereUniqueWithoutTripInput", {})
export class PostUpsertWithWhereUniqueWithoutTripInput {
  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostUpdateWithoutTripInput, {
    nullable: false
  })
  update!: PostUpdateWithoutTripInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutTripInput, {
    nullable: false
  })
  create!: PostCreateWithoutTripInput;
}
