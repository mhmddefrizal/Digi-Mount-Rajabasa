import { Module } from '@nestjs/common';
import { JalurService } from './jalur.service';
import { JalurController } from './jalur.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [JalurController],
  providers: [JalurService, PrismaService],
})
export class JalurModule {}
