import { Injectable } from '@nestjs/common';
import { CreateJalurDto } from './dto/create-jalur.dto';
import { UpdateJalurDto } from './dto/update-jalur.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class JalurService {
  // buat constructor untuk inject prisma service
  constructor(private readonly prisma: PrismaService) {}
  create(createJalurDto: CreateJalurDto) {
    return 'This action adds a new jalur';
  }

  findAll() {
    return `This action returns all jalur`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jalur`;
  }

  update(id: number, updateJalurDto: UpdateJalurDto) {
    return `This action updates a #${id} jalur`;
  }

  remove(id: number) {
    return `This action removes a #${id} jalur`;
  }
}
