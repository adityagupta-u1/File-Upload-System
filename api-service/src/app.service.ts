import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getTable(arg: string) {
    return arg;
  }
  getHello(): string {
    return 'Hello World!';
  }
}
