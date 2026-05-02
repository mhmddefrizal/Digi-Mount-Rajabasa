import { ConflictException, Injectable } from '@nestjs/common';
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
    // }); {

    // cek apakah nama jalur sudah ada
    const existingJalur = await this.prisma.jalur.findFirst({
      where: { nama: data.nama },
    });

    // jika sudah ada, throw conflict exception
    if (existingJalur) {
      throw new ConflictException('Jalur dengan nama yang sama sudah ada!');
    }

    // jika belum ada, buat jalur baru
    const result = await this.prisma.jalur.create({
      data,
    });

    // return response dengan format success, message, dan data
    return {
      success: true,
      message: 'Jalur berhasil dibuat',
      data: result,
    };
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
