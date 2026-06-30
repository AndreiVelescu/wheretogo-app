import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateManyTripInputEnvelope } from "../inputs/PostCreateManyTripInputEnvelope";
import { PostCreateOrConnectWithoutTripInput } from "../inputs/PostCreateOrConnectWithoutTripInput";
import { PostCreateWithoutTripInput } from "../inputs/PostCreateWithoutTripInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostCreateNestedManyWithoutTripInput", {})
export class PostCreateNestedManyWithoutTripInput {
  @TypeGraphQL.Field(_type => [PostCreateWithoutTripInput], {
    nullable: true
  })
  create?: PostCreateWithoutTripInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutTripInput], {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutTripInput[] | undefined;

  @TypeGraphQL.Field(_type => PostCreateManyTripInputEnvelope, {
    nullable: true
  })
  createMany?: PostCreateManyTripInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  connect?: PostWhereUniqueInput[] | undefined;
}
