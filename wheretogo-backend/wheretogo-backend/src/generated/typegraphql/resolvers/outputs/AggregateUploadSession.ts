import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UploadSessionAvgAggregate } from "../outputs/UploadSessionAvgAggregate";
import { UploadSessionCountAggregate } from "../outputs/UploadSessionCountAggregate";
import { UploadSessionMaxAggregate } from "../outputs/UploadSessionMaxAggregate";
import { UploadSessionMinAggregate } from "../outputs/UploadSessionMinAggregate";
import { UploadSessionSumAggregate } from "../outputs/UploadSessionSumAggregate";

@TypeGraphQL.ObjectType("AggregateUploadSession", {
  simpleResolvers: true
})
export class AggregateUploadSession {
  @TypeGraphQL.Field(_type => UploadSessionCountAggregate, {
    nullable: true
  })
  _count!: UploadSessionCountAggregate | null;

  @TypeGraphQL.Field(_type => UploadSessionAvgAggregate, {
    nullable: true
  })
  _avg!: UploadSessionAvgAggregate | null;

  @TypeGraphQL.Field(_type => UploadSessionSumAggregate, {
    nullable: true
  })
  _sum!: UploadSessionSumAggregate | null;

  @TypeGraphQL.Field(_type => UploadSessionMinAggregate, {
    nullable: true
  })
  _min!: UploadSessionMinAggregate | null;

  @TypeGraphQL.Field(_type => UploadSessionMaxAggregate, {
    nullable: true
  })
  _max!: UploadSessionMaxAggregate | null;
}
