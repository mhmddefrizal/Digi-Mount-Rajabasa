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

export interface PendaftaranListResponse {
  success: boolean;
  total: number;
  data: Pendaftaran[];
}
@Injectable()
export class PendaftaranService {
  async create(
    createPendaftaranDto: CreatePendaftaranDto,
  ): Promise<PendaftaranResponse> {
    const response = await pendaftaran_api.post<PendaftaranResponse>(
      '/',
      createPendaftaranDto,
    );

    return response.data;
  }

  async findAll(): Promise<PendaftaranListResponse> {
    const response = await pendaftaran_api.get<PendaftaranListResponse>('/');

    return response.data;
  }

  async findOne(id: string): Promise<PendaftaranResponse> {
    const response = await pendaftaran_api.get<PendaftaranResponse>(`/${id}`);

    return response.data;
  }

  async remove(id: string): Promise<PendaftaranResponse> {
    const response = await pendaftaran_api.delete<PendaftaranResponse>(
      `/${id}`,
    );

    return response.data;
  }
}
