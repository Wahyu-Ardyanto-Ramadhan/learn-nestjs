import { PartialType } from '@nestjs/mapped-types';
import { CreateNestjsDto } from './create-Nestjs.dto';

export class UpdateNestjsDto extends PartialType(CreateNestjsDto) {}
