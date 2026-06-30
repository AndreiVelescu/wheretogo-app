import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { ChatRoom } from "../models/ChatRoom";
import { Notification } from "../models/Notification";
import { Post } from "../models/Post";
import { TripCollaborator } from "../models/TripCollaborator";
import { TripDay } from "../models/TripDay";
import { User } from "../models/User";
import { TripStatus } from "../enums/TripStatus";
import { TripCount } from "../resolvers/outputs/TripCount";

@TypeGraphQL.ObjectType("Trip", {
  simpleResolvers: true
})
export class Trip {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  owner?: User;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  ownerId!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | null;

  @TypeGraphQL.Field(_type => TripStatus, {
    nullable: false
  })
  status!: "DRAFT" | "PLANNED" | "ACTIVE" | "COMPLETED" | "CANCELLED";

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  startDate!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  endDate!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  city?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  country?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isPublic!: boolean;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  totalBudget?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  currency?: string | null;

  days?: TripDay[];

  collaborators?: TripCollaborator[];

  notifications?: Notification[];

  chatRoom?: ChatRoom | null;

  posts?: Post[];

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => TripCount, {
    nullable: true
  })
  _count?: TripCount | null;
}
