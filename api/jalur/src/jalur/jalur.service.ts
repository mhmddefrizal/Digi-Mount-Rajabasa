import { Injectable } from '@nestjs/common';
import { CreateJalurDto } from './dto/create-jalur.dto';
import { UpdateJalurDto } from './dto/update-jalur.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class JalurService {
  // buat constructor untuk inject prisma service
  constructor(private readonly prisma: PrismaService) {}
  create(data: CreateJalurDto) {
    return this.prisma.jalur.create({
      data,
    });
  }

  findAll() {
    return this.prisma.jalur.findMany();
  }

  findOne(id: string) {
    return this.prisma.jalur.findUnique({
      where: { id },
    });
  }

  update(id: string, updateJalurDto: UpdateJalurDto) {
    return this.prisma.jalur.update({
      where: { id },
      data: updateJalurDto,
    });
  }

  remove(id: string) {
    return this.prisma.jalur.delete({
      where: { id },
    });
  }
}
