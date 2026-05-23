import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  // buat constructor untuk inject JwtService
  constructor(private jwtService: JwtService) {}
}
