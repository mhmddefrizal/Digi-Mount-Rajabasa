import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { PendaftaranService } from './pendaftaran.service';
import { CreatePendaftaranDto } from './dto/create-pendaftaran.dto';
import { UpdatePendaftaranDto } from './dto/update-pendaftaran.dto';
import { InternalGuard } from '../internal.guard';

@Controller('pendaftaran')
@UseGuards(InternalGuard)
export class PendaftaranController {
  constructor(private readonly pendaftaranService: PendaftaranService) {}

  @Post()
  create(@Body() createPendaftaranDto: CreatePendaftaranDto) {
    return this.pendaftaranService.create(createPendaftaranDto);
  }

  @Get()
  findAll() {
    return this.pendaftaranService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pendaftaranService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePendaftaranDto: UpdatePendaftaranDto,
  ) {
    return this.pendaftaranService.update(+id, updatePendaftaranDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pendaftaranService.remove(+id);
  }
}
