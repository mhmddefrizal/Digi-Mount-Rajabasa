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
// buat class JwtAccessStrategy yang extends PassportStrategy dengan strategy JWT
export class JwtAccessStrategy extends PassportStrategy(
  Strategy,
  'jwt-access-gunung-rajabasa',
) {
  // buat constructor untuk mengatur strategi JWT
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'access-gunung-rajabasa-oke',
    });
  }

  // buat fungsi validate untuk memvalidasi payload JWT
  validate(payload: JwtPayload) {
    return payload;
  }
}
