import { PartialType } from '@nestjs/mapped-types';
import { CreateJalurDto } from './create-jalur.dto';

export class UpdateJalurDto extends PartialType(CreateJalurDto) {}
