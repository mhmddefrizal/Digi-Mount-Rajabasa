import { Injectable } from '@nestjs/common';
import { jalur_api } from '../common/instances/jalur.instance';

import { CreateJalurDto } from './dto/create-jalur.dto';
import { UpdateJalurDto } from './dto/update-jalur.dto';

// buat interface untuk data kategori
export interface Jalur {
  id: string;
  nama: string;
  deskripsi?: string;
  tingkatKesulitan: string;
  createdAt: Date;
}
@Injectable()
export class JalurService {
  // buat fungsi create yang menerima parameter createJalurDto dengan tipe CreateJalurDto dan mengembalikan Promise<Jalur>
  async create(createJalurDto: CreateJalurDto): Promise<Jalur> {
    // return 'This action adds a new jalur';
    // lakukan request ke microservice jalur untuk membuat data jalur baru
    const response = await jalur_api.post<Jalur>('/', createJalurDto);
    // kembalikan data jalur yang baru dibuat
    return response.data;
  }

  // buat fungsi findAll yang mengembalikan Promise<Jalur[]>
  async findAll(): Promise<Jalur[]> {
    const response = await jalur_api.get<Jalur[]>('/');

    return response.data;
  }

  async findOne(id: string): Promise<Jalur> {
    const response = await jalur_api.get<Jalur>(`/${id}`);

    return response.data;
  }

  async update(id: string, updateJalurDto: UpdateJalurDto): Promise<Jalur> {
    // return `This action updates a #${id} jalur`;
    const response = await jalur_api.patch<Jalur>(`/${id}`, updateJalurDto);

    return response.data;
  }

  async remove(id: string): Promise<Jalur> {
    // return `This action removes a #${id} jalur`;
    const response = await jalur_api.delete<Jalur>(`/${id}`);
    return response.data;
  }
}
