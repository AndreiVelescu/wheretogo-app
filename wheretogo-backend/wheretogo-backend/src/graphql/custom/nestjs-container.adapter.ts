// src/graphql/nestjs-container.adapter.ts
import { ModuleRef } from '@nestjs/core';

/**
 * Container adapter care conectează TypeGraphQL cu NestJS dependency injection
 */
export class TypeGraphQLNestContainer {
  constructor(private readonly moduleRef: ModuleRef) {
    console.log('🔧 TypeGraphQLNestContainer initialized');
  }

  /**
   * TypeGraphQL apelează această metodă când are nevoie de o instanță de resolver
   */
  get<T = any>(someClass: any): T {
    const className = someClass.name || 'Unknown';

    try {
      // Încearcă să obții instanța de la NestJS
      const instance = this.moduleRef.get(someClass, { strict: false });
      // console.log(`  ✅ Got ${className} from NestJS container`);
      return instance;
    } catch (error) {
      // Nu s-a găsit în NestJS - creează o instanță nouă

      try {
        // Încearcă să creezi instanța
        const instance = new someClass();
        // console.log(
        //   `  ⚙️  Created ${className} instance (not managed by NestJS)`,
        // );
        return instance;
      } catch (instantiationError) {
        console.error(
          `  ❌ Failed to create ${className}:`,
          instantiationError.message,
        );

        // Dacă nu poate fi instantiat, returnează clasa
        // (pentru cazuri speciale unde TypeGraphQL gestionează instantierea)
        console.log(
          `  ⚠️  Returning ${className} class for TypeGraphQL to handle`,
        );
        return someClass;
      }
    }
  }
}
