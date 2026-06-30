import { Module } from '@nestjs/common';
import { resolvers } from '../../generated/typegraphql';

@Module({
  providers: resolvers.map((resolver) => resolver),
  exports: resolvers.map((resolver) => resolver),
})
export class GeneratedResolversModule {}
