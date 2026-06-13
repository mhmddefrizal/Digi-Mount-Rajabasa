import { Module } from '@nestjs/common';
import { PendaftaranService } from './pendaftaran.service';
import { PendaftaranController } from './pendaftaran.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [PendaftaranController],
  providers: [PendaftaranService, PrismaService],
})
export class PendaftaranModule {}
