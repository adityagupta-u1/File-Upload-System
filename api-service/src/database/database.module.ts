import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Pool } from 'pg';

const dbProvider = {
  provide: 'POSTGRES_POOL',
  useFactory: (configService: ConfigService) => {
    const databaseUrl = configService.getOrThrow<string>('DATABASE_URL');

    const config: ConstructorParameters<typeof Pool>[0] = {
      connectionString: databaseUrl,
    };

    return new Pool(config);
  },
  inject: [ConfigService],
};

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  providers: [dbProvider],
  exports: [dbProvider],
})
export class DatabaseModule {}
