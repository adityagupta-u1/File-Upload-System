import { Injectable } from '@nestjs/common';
import { DatabaseService } from './database/db.service';

@Injectable()
export class AppService {
  constructor(private readonly db: DatabaseService) {}

  async getTable() {
    return this.db.query('SELECT * FROM playing_with_neon');
  }
}
