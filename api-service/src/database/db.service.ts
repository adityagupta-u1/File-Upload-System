import { Inject, Injectable } from '@nestjs/common';
import { Pool, QueryResultRow, Submittable } from 'pg';

@Injectable()
export class DatabaseService {
  constructor(@Inject('POSTGRES_POOL') private readonly pool: Pool) {}

  async query<T extends any[] | QueryResultRow | Submittable>(
    text: string,
    params?: unknown[],
  ): Promise<T[]> {
    const client = await this.pool.connect();

    try {
      const result = await client.query<T>(text, params);
      return result.rows; // ✅ now typed
    } finally {
      client.release();
    }
  }
}
