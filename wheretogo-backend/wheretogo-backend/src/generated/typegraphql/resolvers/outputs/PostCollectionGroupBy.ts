import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCollectionAvgAggregate } from "../outputs/PostCollectionAvgAggregate";
import { PostCollectionCountAggregate } from "../outputs/PostCollectionCountAggregate";
import { PostCollectionMaxAggregate } from "../outputs/PostCollectionMaxAggregate";
import { PostCollectionMinAggregate } from "../outputs/PostCollectionMinAggregate";
import { PostCollectionSumAggregate } from "../outputs/PostCollectionSumAggregate";

@TypeGraphQL.ObjectType("PostCollectionGroupBy", {
  simpleResolvers: true
})
export class PostCollectionGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isPublic!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  coverImage!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => PostCollectionCountAggregate, {
    nullable: true
  })
  _count!: PostCollectionCountAggregate | null;

  @TypeGraphQL.Field(_type => PostCollectionAvgAggregate, {
    nullable: true
  })
  _avg!: PostCollectionAvgAggregate | null;

  @TypeGraphQL.Field(_type => PostCollectionSumAggregate, {
    nullable: true
  })
  _sum!: PostCollectionSumAggregate | null;

  @TypeGraphQL.Field(_type => PostCollectionMinAggregate, {
    nullable: true
  })
  _min!: PostCollectionMinAggregate | null;

  @TypeGraphQL.Field(_type => PostCollectionMaxAggregate, {
    nullable: true
  })
  _max!: PostCollectionMaxAggregate | null;
}
