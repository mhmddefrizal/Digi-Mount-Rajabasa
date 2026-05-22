import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JalurModule } from './jalur/jalur.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [JalurModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
