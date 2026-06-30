import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class GqlAuthGuard extends AuthGuard('jwt') {
  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }

  handleRequest(err: any, user: any, info: any) {
    // If there's an error or no user, check if it's JWT expiration
    if (err || !user) {
      // Check various JWT error messages
      const errorMessage = err?.message || info?.message || '';

      if (
        errorMessage.includes('jwt expired') ||
        errorMessage.includes('TokenExpiredError') ||
        info?.name === 'TokenExpiredError'
      ) {
        throw new UnauthorizedException('jwt expired');
      }

      // For other auth errors
      throw err || new UnauthorizedException('User not authenticated');
    }

    return user;
  }
}
