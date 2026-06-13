import { Injectable } from '@nestjs/common';
import { pendaftaran_api } from '../common/instances/pendaftaran.instance';
import { CreatePendaftaranDto } from './dto/create-pendaftaran.dto';

export interface Pendaftaran {
  id: string;
  namaKetua: string;
  nomorHp: string;
  tipePendakian: string;
  tanggalPendakian: Date;
  jumlahAnggota: number;
  jumlahMotor: number;
  totalBiaya: number;
  statusPembayaran: string;
  jalurId: string;
  createdAt: Date;
}

export interface PendaftaranResponse {
  success: boolean;
  message?: string;
  data: Pendaftaran;
}
@Injectable()
export class PendaftaranService {
  async create(createPendaftaranDto: CreatePendaftaranDto) {
    const response = await pendaftaran_api.post('/', createPendaftaranDto);

    return response.data;
  }
}
