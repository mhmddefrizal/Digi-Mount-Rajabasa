import {
  CanActivate,
  ExecutionContext,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import { Request } from 'express';

@Injectable()
export class InternalGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();

    // tambahkan pengecekan header 'x-internal-secret' untuk memastikan bahwa request berasal dari internal
    const secret = request.headers['x-internal-secret'];

    if (secret !== 'rahasia-banget-cik') {
      throw new UnauthorizedException({
        success: false,
        message: 'Akses Ditolak: Hanya request internal yang diizinkan !',
        metadata: {
          status: HttpStatus.UNAUTHORIZED,
        },
      });
    }
  }
}
