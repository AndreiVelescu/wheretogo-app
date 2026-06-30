import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import {
  LocationsCustomResolver,
  UsersCustomResolver,
} from '../graphql/custom/resolvers';
import { LocationsService } from '../locations/locations.service';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret:
          configService.get<string>('JWT_SECRET') || 'fallback-secret-key',
        signOptions: {
          expiresIn: '1h',
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [
    UsersService,
    UsersResolver,
    JwtStrategy,
    LocationsCustomResolver,
    UsersCustomResolver,
    JwtService,
    LocationsService,
  ],
  exports: [UsersService],
})
export class UsersModule {}
