import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JalurModule } from './jalur/jalur.module';

@Module({
  imports: [JalurModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
