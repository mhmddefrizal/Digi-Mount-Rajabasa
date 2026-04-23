import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JalurService } from './jalur.service';
import { CreateJalurDto } from './dto/create-jalur.dto';
import { UpdateJalurDto } from './dto/update-jalur.dto';

@Controller('jalur')
export class JalurController {
  constructor(private readonly jalurService: JalurService) {}

  @Post()
  create(@Body() createJalurDto: CreateJalurDto) {
    return this.jalurService.create(createJalurDto);
  }

  @Get()
  findAll() {
    return this.jalurService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jalurService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJalurDto: UpdateJalurDto) {
    return this.jalurService.update(+id, updateJalurDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jalurService.remove(+id);
  }
}
