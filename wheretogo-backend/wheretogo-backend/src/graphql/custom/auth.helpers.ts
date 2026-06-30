import { JwtService } from '@nestjs/jwt';
import { UnauthorizedException } from '@nestjs/common';

// Shared JWT service instance
export const jwtService = new JwtService({
  secret: process.env.JWT_SECRET || 'fallback-secret-key',
  signOptions: { expiresIn: '1h' },
});

// Shared helper to extract userId from context
export function getUserIdFromContext(ctx: any): number {
  const authHeader =
    ctx?.req?.headers?.authorization || ctx?.req?.headers?.Authorization;
  if (!authHeader) {
    throw new UnauthorizedException('Unauthorized');
  }
  const token = authHeader.replace(/^Bearer\s+/i, '');
  const payload = jwtService.verify(token);
  return payload.sub || payload.userId;
}
