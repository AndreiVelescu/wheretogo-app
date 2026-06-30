import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MINIO_TOKEN } from './minio.decorator';
import { Client } from 'minio';
import { MinioService } from './minio.service';

@Global()
@Module({
  providers: [
    {
      provide: MINIO_TOKEN,
      inject: [ConfigService],
      useFactory: (configService: ConfigService): Client => {
        return new Client({
          endPoint: configService.getOrThrow<string>('MINIO_ENDPOINT'),
          port: Number(configService.get<number>('MINIO_PORT', 9000)),
          useSSL: configService.get<string>('MINIO_USE_SSL') === 'true',
          accessKey: configService.getOrThrow<string>('MINIO_ACCESS_KEY'),
          secretKey: configService.getOrThrow<string>('MINIO_SECRET_KEY'),
        });
      },
    },
    MinioService,
  ],
  exports: [MINIO_TOKEN, MinioService],
})
export class MinioModule {}
