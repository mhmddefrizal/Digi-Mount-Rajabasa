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
  async create(createJalurDto: CreateJalurDto): Promise<Jalur> {
    // return 'This action adds a new jalur';
    const response = await jalur_api.post<Jalur>('/', createJalurDto);
    return response.data;
  }

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

  remove(id: string) {
    // return `This action removes a #${id} jalur`;
  }
}
