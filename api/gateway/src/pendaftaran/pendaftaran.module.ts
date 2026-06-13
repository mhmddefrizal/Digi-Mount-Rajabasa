import { Module } from '@nestjs/common';
import { PendaftaranController } from './pendaftaran.controller';

@Module({
  controllers: [PendaftaranController]
})
export class PendaftaranModule {}
