import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  // buat constructor untuk inject JwtService
  constructor(private jwtService: JwtService) {}

  // buat fungsi login
  login(dto: AuthDto) {
    // validasi static user
    if (dto.email !== 'admin@gmail.com' || dto.password !== 'admin123') {
      throw new UnauthorizedException({
        success: false,
        message: 'Email atau password tidak valid !',
      });
    }
  }
}
