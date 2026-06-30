import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey:
        configService.get<string>('JWT_SECRET') || 'fallback-secret-key',
    });
  }

  async validate(payload: any) {
    // Check if token is expired (Passport already handles this, but we make it explicit)
    if (payload.exp && Date.now() >= payload.exp * 1000) {
      throw new UnauthorizedException('jwt expired');
    }

    console.log('JWT Payload received in validate:', payload);
    const user = { sub: payload.sub, email: payload.email, role: payload.role };
    console.log('User object returned from validate:', user);
    return user;
  }
}
