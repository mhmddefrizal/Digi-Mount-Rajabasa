import { Injectable } from '@nestjs/common';
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

  findAll() {
    return `This action returns all pendaftaran`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pendaftaran`;
  }

  update(id: number, updatePendaftaranDto: UpdatePendaftaranDto) {
    return `This action updates a #${id} pendaftaran`;
  }

  remove(id: number) {
    return `This action removes a #${id} pendaftaran`;
  }
}
