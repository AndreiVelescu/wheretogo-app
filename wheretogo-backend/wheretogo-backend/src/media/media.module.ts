import { Module } from '@nestjs/common';
import { MediaService } from './media.service';
import { MediaResolver } from './media.resolver';
import { MinioModule } from '../minio/minio.module';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [MinioModule, PrismaModule],
  providers: [MediaService, MediaResolver],
  exports: [MediaService],
})
export class MediaModule {}
