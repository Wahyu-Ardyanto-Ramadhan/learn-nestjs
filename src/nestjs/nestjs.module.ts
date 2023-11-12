import { Module } from '@nestjs/common';
import { NestjsController } from './nestjs.controller';
import { NestjsService } from './nestjs.service';

@Module({
  controllers: [NestjsController],
  providers: [NestjsService],
})
export class NestjsModule {}
