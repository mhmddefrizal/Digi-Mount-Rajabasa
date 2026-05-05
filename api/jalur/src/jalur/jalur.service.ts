import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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

  async findAll() {
    // return this.prisma.jalur.findMany();
    const data = await this.prisma.jalur.findMany();

    if (data.length === 0) {
      throw new NotFoundException('Data Jalur tidak ditemukan!');
    }

    return {
      success: true,
      total: data.length,
      data,
    };
  }

  async findOne(id: string) {
    // return this.prisma.jalur.findUnique({
    //   where: { id },
    // });

    const data = await this.prisma.jalur.findUnique({
      where: { id },
    });

    if (!data) {
      throw new NotFoundException('Data Jalur tidak ditemukan!');
    }

    return {
      success: true,
      data,
    };
  }

  async update(id: string, data: UpdateJalurDto) {
    // return this.prisma.jalur.update({
    //   where: { id },
    //   data: updateJalurDto,
    // });
    const existing = await this.prisma.jalur.findUnique({
      where: { id },
    });

    if (!existing) {
      throw new NotFoundException('Data Jalur tidak ditemukan!');
    }

    const result = await this.prisma.jalur.update({
      where: { id },
      data,
    });

    return {
      success: true,
      message: 'Jalur berhasil diperbarui',
      data: result,
    };
  }

  remove(id: string) {
    return this.prisma.jalur.delete({
      where: { id },
    });
  }
}
