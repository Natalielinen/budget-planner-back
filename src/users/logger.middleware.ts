/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: (errror?: any) => void) {
    console.log(`Request: ${req.method} ${req.url}`);
    next();
  }
}
