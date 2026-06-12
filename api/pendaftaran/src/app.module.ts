import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { PendaftaranModule } from './pendaftaran/pendaftaran.module';

@Module({
  imports: [PendaftaranModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
