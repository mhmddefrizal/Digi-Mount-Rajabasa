import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateJalurDto } from './dto/create-jalur.dto';
import { UpdateJalurDto } from './dto/update-jalur.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class JalurService {
  // buat constructor untuk inject prisma service
  constructor(private readonly prisma: PrismaService) {}

  // buat fungsi untuk create data jalur
  async create(data: CreateJalurDto) {
    // return this.prisma.jalur.create({
    //   data,
    // });

    try {
      const existingJalur = await this.prisma.jalur.findFirst({
        where: { nama: data.nama },
      });

      if (existingJalur) {
        throw new BadRequestException('Jalur dengan nama yang sama sudah ada!');
      }

      const result = await this.prisma.jalur.create({
        data,
      });

      return {
        success: true,
        message: 'Jalur berhasil dibuat',
        data: result,
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
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
