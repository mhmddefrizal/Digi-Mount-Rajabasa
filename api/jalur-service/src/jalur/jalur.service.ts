import { Injectable } from '@nestjs/common';
import { CreateJalurDto } from './dto/create-jalur.dto';
import { UpdateJalurDto } from './dto/update-jalur.dto';

@Injectable()
export class JalurService {
  create(createJalurDto: CreateJalurDto) {
    return 'This action adds a new jalur';
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
