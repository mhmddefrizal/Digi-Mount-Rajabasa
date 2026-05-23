import { HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  // buat constructor untuk inject JwtService
  constructor(private jwtService: JwtService) {}

  // buat fungsi login untuk memvalidasi email dan password, jika valid buat token JWT
  login(dto: AuthDto) {
    // jika email dan password tidak valid, lempar error UnauthorizedException
    if (dto.email !== 'admin@gmail.com' || dto.password !== 'admin123') {
      throw new UnauthorizedException({
        success: false,
        message: 'Email atau password tidak valid !',

        metadata: {
          status: HttpStatus.UNAUTHORIZED,
        },
      });
    }

    // jika email dan password valid, buat token JWT
    // buat payload untuk JWT
    const payload = {
      email: dto.email,
      password: dto.password,
    };

    // tampilkan hasil respon
    return {
      success: true,
      message: 'Access token berhasil dibuat !',

      metadata: {
        status: HttpStatus.CREATED,
      },

      // tampilkan data access token dan refresh token
      data: {
        access_token: this.jwtService.sign(payload, {
          secret: 'access-gunung-rajabasa-oke',
          expiresIn: '15m',
        }),
        refresh_token: this.jwtService.sign(payload, {
          secret: 'refresh-gunung-rajabasa-oke',
          expiresIn: '7d',
        }),
      },
    };
  }

  // buat fungsi refresh untuk membuat access token baru menggunakan refresh token
  refresh(user: AuthDto) {
    // buat payload untuk JWT
    const payload = {
      email: user.email,
      password: user.password,
    };

    // tampilkan hasil respon
    return {};
  }
}
