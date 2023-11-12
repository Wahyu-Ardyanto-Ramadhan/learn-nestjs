import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Param,
  Query,
  Body,
} from '@nestjs/common';
import { CreateNestjsDto } from './dto/create-nestjs.dto';
import { UpdateNestjsDto } from './dto/update-nestjs.dto';
import { NestjsService } from './nestjs.service';

@Controller('nestjs')
export class NestjsController {
  constructor(private readonly nestjsService: NestjsService) {}

  // GET /nestjs?weapon=fast --> []
  @Get()
  getNestjs(@Query('weapon') weapon: 'stars' | 'nunchucks') {
    // const service = new NestjsService();
    return this.nestjsService.getNestjs(weapon);
  }

  // GET /nestjs/:id --> { ... }
  @Get(':id')
  getOneNestjs(@Param('id') id: string) {
    return {
      id,
    };
  }

  // POST /nestjs
  @Post()
  CreateNestjs(@Body() createNestjsDt: CreateNestjsDto) {
    return {
      name: createNestjsDt.name,
    };
  }

  // PUT /nestjs/:id--> { ... }
  @Put(':id')
  UpdateNestjs(
    @Param('id') id: string,
    @Body() updateNestjsDto: UpdateNestjsDto,
  ) {
    return {
      id,
      name: updateNestjsDto,
    };
  }

  // DELETE /nestjs/:id
  @Delete(':id')
  DeleteNestjs(@Param('id') id: string) {
    return {
      id,
    };
  }
}
