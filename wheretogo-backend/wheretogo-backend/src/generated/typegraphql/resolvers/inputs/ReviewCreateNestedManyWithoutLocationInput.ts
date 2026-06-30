import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReviewCreateManyLocationInputEnvelope } from "../inputs/ReviewCreateManyLocationInputEnvelope";
import { ReviewCreateOrConnectWithoutLocationInput } from "../inputs/ReviewCreateOrConnectWithoutLocationInput";
import { ReviewCreateWithoutLocationInput } from "../inputs/ReviewCreateWithoutLocationInput";
import { ReviewWhereUniqueInput } from "../inputs/ReviewWhereUniqueInput";

@TypeGraphQL.InputType("ReviewCreateNestedManyWithoutLocationInput", {})
export class ReviewCreateNestedManyWithoutLocationInput {
  @TypeGraphQL.Field(_type => [ReviewCreateWithoutLocationInput], {
    nullable: true
  })
  create?: ReviewCreateWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewCreateOrConnectWithoutLocationInput], {
    nullable: true
  })
  connectOrCreate?: ReviewCreateOrConnectWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => ReviewCreateManyLocationInputEnvelope, {
    nullable: true
  })
  createMany?: ReviewCreateManyLocationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ReviewWhereUniqueInput], {
    nullable: true
  })
  connect?: ReviewWhereUniqueInput[] | undefined;
}
