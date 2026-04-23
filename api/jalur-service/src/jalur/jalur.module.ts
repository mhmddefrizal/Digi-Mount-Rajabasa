import { Module } from '@nestjs/common';
import { JalurService } from './jalur.service';
import { JalurController } from './jalur.controller';

@Module({
  controllers: [JalurController],
  providers: [JalurService],
})
export class JalurModule {}
