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
  async create(createJalurDto: CreateJalurDto) {
    // return 'This action adds a new jalur';
    const response = await jalur_api.post('/', createJalurDto);
    return response.data;
  }

  findAll() {
    return `This action returns all jalur`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jalur`;
  }

  update(id: number, updateJalurDto: UpdateJalurDto) {
    return `This action updates a #${id} jalur`;
  }

  remove(id: number) {
    return `This action removes a #${id} jalur`;
  }
}
