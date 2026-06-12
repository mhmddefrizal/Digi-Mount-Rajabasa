import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from './generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  // buat constructor untuk menginisialisasi prisma client dengan adapter postgres
  constructor() {
    // adapter postgres dengan connection string dari environment variable DATABASE_URL
    const adapter = new PrismaPg({
      connectionString: process.env.DATABASE_URL as string,
    });
    // panggil super dengan adapter untuk menginisialisasi prisma client
    super({ adapter });
  }

  // buat fungsi onModuleInit untuk connect ke database saat module diinisialisasi
  async onModuleInit() {
    await this.$connect();
  }
}
