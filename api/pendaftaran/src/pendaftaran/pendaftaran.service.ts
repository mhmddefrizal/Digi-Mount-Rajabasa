import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePendaftaranDto } from './dto/create-pendaftaran.dto';
import { UpdatePendaftaranDto } from './dto/update-pendaftaran.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PendaftaranService {
  // buat constructor untuk inject prisma service
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreatePendaftaranDto) {
    // return 'This action adds a new pendaftaran';

    const totalBiaya = data.jumlahAnggota * 20000 + data.jumlahMotor * 5000;

    const result = await this.prisma.pendaftaran.create({
      data: {
        ...data,
        totalBiaya,
      },
    });

    return {
      success: true,
      message: 'Pendaftaran berhasil dibuat',
      data: result,
    };
  }

  async findAll() {
    const data = await this.prisma.pendaftaran.findMany();

    return {
      success: true,
      total: data.length,
      data,
    };
  }

  async findOne(id: string) {
    const data = await this.prisma.pendaftaran.findUnique({
      where: { id },
    });

    if (!data) {
      throw new NotFoundException('Data pendaftaran tidak ditemukan');
    }

    return {
      success: true,
      data,
    };
  }

  async update(id: string, data: UpdatePendaftaranDto) {
    const existing = await this.prisma.pendaftaran.findUnique({
      where: { id },
    });

    if (!existing) {
      throw new NotFoundException('Data pendaftaran tidak ditemukan');
    }

    const result = await this.prisma.pendaftaran.update({
      where: { id },
      data,
    });

    return {
      success: true,
      message: 'Pendaftaran berhasil diperbarui',
      data: result,
    };
  }

  async remove(id: string) {
    const existing = await this.prisma.pendaftaran.findUnique({
      where: { id },
    });

    if (!existing) {
      throw new NotFoundException('Data pendaftaran tidak ditemukan');
    }

    const result = await this.prisma.pendaftaran.delete({
      where: { id },
    });

    return {
      success: true,
      message: 'Pendaftaran berhasil dihapus',
      data: result,
    };
  }
}
