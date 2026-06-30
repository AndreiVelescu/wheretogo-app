// src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ModuleRef } from '@nestjs/core';
import { join } from 'path';
import { buildSchema } from 'type-graphql';
import { resolvers } from './generated/typegraphql';
import { customResolvers } from './graphql/custom/resolvers';
import { PrismaClient } from '@prisma/client';
import { DateTimeResolver } from 'graphql-scalars';

import { UsersModule } from './users/users.module';
import { LocationsModule } from './locations/locations.module';
import { TripsModule } from './trips/trips.module';
import { NotificationsModule } from './notifications/notifications.module';
import { ScheduleModule } from './schedules/schedule.module';
import { ChatModule } from './chat/chat.module';

import { TypeGraphQLNestContainer } from './graphql/custom/nestjs-container.adapter';
import { PubsubModule } from './pubsub/pubsub.module';
import { PUB_SUB } from './pubsub/pubsub.module';
import { PostsModule } from './posts/posts.module';
import { MinioModule } from './minio/minio.module';
import { MediaModule } from './media/media.module';

const prisma = new PrismaClient();

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),

    PubsubModule,

    // IMPORTANT: Toate modulele ÎNAINTE de GraphQLModule
    UsersModule,
    LocationsModule,
    TripsModule,
    NotificationsModule,
    ScheduleModule,
    ChatModule,
    PostsModule,
    MinioModule,
    MediaModule,

    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      inject: [ModuleRef, PUB_SUB],
      useFactory: async (moduleRef: ModuleRef, pubSub) => {
        console.log('🔧 Building GraphQL schema with NestJS container...');

        // Creează container-ul custom
        const container = new TypeGraphQLNestContainer(moduleRef);

        const schema = await buildSchema({
          resolvers: [...resolvers, ...customResolvers],
          validate: false,
          emitSchemaFile: join(process.cwd(), 'src/schema.gql'),
          scalarsMap: [{ type: Date, scalar: DateTimeResolver }],
          pubSub,
          container: container as any, // Pasează container-ul
        });
        const subscriptionType = schema.getSubscriptionType();
        if (subscriptionType) {
          const field = subscriptionType.getFields().newMessage;
          if (field) {
            const roomIdArg = field.args.find((a) => a.name === 'roomId');
            console.log(
              'SERVER SCHEMA: newMessage roomId type =',
              roomIdArg?.type.toString(),
            );
          }
        }

        console.log('✅ GraphQL schema built successfully');

        return {
          schema,
          playground: true,
          installSubscriptionHandlers: true,
          context: ({ req, connection }) => {
            // Subscriptions
            if (connection) {
              return {
                user: connection.context.user,
                prisma,
                pubSub,
              };
            }

            // HTTP queries & mutations
            return {
              req,
              prisma,
            };
          },
          subscriptions: {
            'graphql-ws': {
              path: '/graphql',
              context: (ctx) => {
                // Decode token direct aici pentru a avea user în context
                let user: any = null;

                try {
                  const token =
                    ctx.connectionParams?.authorization ||
                    ctx.connectionParams?.Authorization;

                  if (token) {
                    const jwt = require('jsonwebtoken');
                    user = jwt.verify(
                      token.replace('Bearer ', ''),
                      process.env.JWT_SECRET,
                    );
                  }
                } catch (error: any) {
                  console.log(
                    '[WS CONTEXT] Failed to decode token:',
                    error.message,
                  );
                }

                console.log(
                  '[WS CONTEXT] Building context, user:',
                  user ? `userId=${user.sub}` : 'undefined',
                );

                return {
                  ...ctx.connectionParams,
                  prisma,
                  pubSub,
                  user, // User decodat din token
                };
              },
              onConnect: (ctx) => {
                const token =
                  ctx.connectionParams?.authorization ||
                  ctx.connectionParams?.Authorization;

                if (!token) throw new Error('Missing auth token');

                const jwt = require('jsonwebtoken');
                const decoded = jwt.verify(
                  token.replace('Bearer ', ''),
                  process.env.JWT_SECRET,
                );

                console.log(`[WS CONNECT] userId=${decoded.sub}`);

                // Publish user ONLINE status
                const userStatusTopic = `USER_STATUS_${decoded.sub}`;
                pubSub.publish(userStatusTopic, {
                  userId: decoded.sub,
                  status: 'ONLINE',
                  lastSeen: new Date(),
                });
                console.log(`[USER STATUS] User ${decoded.sub} is now ONLINE`);

                // Return pentru validare - nu mai e necesar pentru context
                return {
                  user: decoded,
                };
              },
              onDisconnect: (ctx) => {
                // Get userId from context if available
                const userId = ctx?.extra?.user?.sub;

                console.log(
                  '[WS DISCONNECT] Client disconnected from graphql-ws',
                  {
                    time: new Date().toISOString(),
                    userId,
                  },
                );

                // Publish user OFFLINE status
                if (userId) {
                  const userStatusTopic = `USER_STATUS_${userId}`;
                  pubSub.publish(userStatusTopic, {
                    userId,
                    status: 'OFFLINE',
                    lastSeen: new Date(),
                  });
                  console.log(`[USER STATUS] User ${userId} is now OFFLINE`);
                }
              },
            },
          } as any,
        };
      },
    }),

    ThrottlerModule.forRoot([
      {
        ttl: parseInt(process.env.RATE_LIMIT_TTL || '60') * 1000,
        limit: parseInt(process.env.RATE_LIMIT_LIMIT || '100'),
      },
    ]),

    PostsModule,

    MinioModule,
  ],
})
export class AppModule {}
