import { Injectable } from '@nestjs/common';
import { pendaftaran_api } from '../common/instances/pendaftaran.instance';
import { CreatePendaftaranDto } from './dto/create-pendaftaran.dto';

@Injectable()
export class PendaftaranService {
  async create(createPendaftaranDto: CreatePendaftaranDto) {
    const response = await pendaftaran_api.post('/', createPendaftaranDto);

    return response.data;
  }
}
