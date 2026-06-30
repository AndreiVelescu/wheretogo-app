import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

/**
 * PrismaModule - Modul global pentru gestionarea conexiunii la baza de date
 *
 * @Global() - Face PrismaService disponibil în toate modulele fără import explicit
 * Acest modul se ocupă de:
 * - Crearea și gestionarea unei singure instanțe de PrismaClient
 * - Conectarea/deconectarea automată la/de la baza de date
 * - Injectare prin Dependency Injection în toate serviciile
 */
@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
