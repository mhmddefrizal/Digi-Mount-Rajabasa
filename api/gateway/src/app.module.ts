import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JalurModule } from './jalur/jalur.module';
import { AuthModule } from './auth/auth.module';
import { PendaftaranModule } from './pendaftaran/pendaftaran.module';

@Module({
  imports: [JalurModule, AuthModule, PendaftaranModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
