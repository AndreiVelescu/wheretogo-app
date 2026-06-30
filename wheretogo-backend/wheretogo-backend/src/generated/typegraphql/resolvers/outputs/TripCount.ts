import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCountCollaboratorsArgs } from "./args/TripCountCollaboratorsArgs";
import { TripCountDaysArgs } from "./args/TripCountDaysArgs";
import { TripCountNotificationsArgs } from "./args/TripCountNotificationsArgs";
import { TripCountPostsArgs } from "./args/TripCountPostsArgs";

@TypeGraphQL.ObjectType("TripCount", {
  simpleResolvers: true
})
export class TripCount {
  days!: number;
  collaborators!: number;
  notifications!: number;
  posts!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "days",
    nullable: false
  })
  getDays(@TypeGraphQL.Root() root: TripCount, @TypeGraphQL.Args() args: TripCountDaysArgs): number {
    return root.days;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "collaborators",
    nullable: false
  })
  getCollaborators(@TypeGraphQL.Root() root: TripCount, @TypeGraphQL.Args() args: TripCountCollaboratorsArgs): number {
    return root.collaborators;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "notifications",
    nullable: false
  })
  getNotifications(@TypeGraphQL.Root() root: TripCount, @TypeGraphQL.Args() args: TripCountNotificationsArgs): number {
    return root.notifications;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "posts",
    nullable: false
  })
  getPosts(@TypeGraphQL.Root() root: TripCount, @TypeGraphQL.Args() args: TripCountPostsArgs): number {
    return root.posts;
  }
}
