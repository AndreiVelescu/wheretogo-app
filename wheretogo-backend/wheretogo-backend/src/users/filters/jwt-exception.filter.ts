import { Catch, ExceptionFilter, UnauthorizedException } from '@nestjs/common';
import { GqlExceptionFilter } from '@nestjs/graphql';
import { GraphQLError } from 'graphql';

@Catch(UnauthorizedException)
export class JwtExceptionFilter implements GqlExceptionFilter {
  catch(exception: UnauthorizedException) {
    const response = exception.getResponse() as any;
    const message = exception.message || 'Unauthorized';

    // Check if this is a JWT expiration error
    const isJwtExpired =
      message.includes('jwt expired') ||
      message.includes('JWT expired') ||
      message.toLowerCase().includes('token expired');

    return new GraphQLError(isJwtExpired ? 'jwt expired' : message, {
      extensions: {
        code: isJwtExpired ? 'JWT_EXPIRED' : 'UNAUTHENTICATED',
        statusCode: 401,
        originalMessage: message,
      },
    });
  }
}
