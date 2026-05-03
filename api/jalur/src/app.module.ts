import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JalurModule } from './jalur/jalur.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    JalurModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
