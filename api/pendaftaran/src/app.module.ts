import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { PendaftaranModule } from './pendaftaran/pendaftaran.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), PendaftaranModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
