import { Test, TestingModule } from '@nestjs/testing';
import { NestjsController } from './nestjs.controller';

describe('NestjsController', () => {
  let controller: NestjsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NestjsController],
    }).compile();

    controller = module.get<NestjsController>(NestjsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
