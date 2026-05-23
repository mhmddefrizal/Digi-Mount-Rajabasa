import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import * as passportJwt from 'passport-jwt';

const { ExtractJwt, Strategy } = passportJwt;

// interface payload
interface JwtPayload {
  email: string;
  password: string;
}

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh-gunung-rajabasa',
) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromBodyField('refresh_token'),
      secretOrKey: 'refresh-gunung-rajabasa-oke',
    });
  }

  // buat fungsi validate untuk memvalidasi payload JWT
  validate(payload: JwtPayload) {
    return payload;
  }
}
