import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';

import { PendaftaranService } from './pendaftaran.service';
import { CreatePendaftaranDto } from './dto/create-pendaftaran.dto';

import { JwtAccessGuard } from '../auth/guards/jwt-access.guard';

@Controller('pendaftaran')
@UseGuards(JwtAccessGuard)
export class PendaftaranController {
  constructor(private readonly pendaftaranService: PendaftaranService) {}

  @Post()
  create(
    @Body()
    createPendaftaranDto: CreatePendaftaranDto,
  ) {
    return this.pendaftaranService.create(createPendaftaranDto);
  }

  @Get()
  findAll() {
    return this.pendaftaranService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pendaftaranService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pendaftaranService.remove(id);
  }
}
