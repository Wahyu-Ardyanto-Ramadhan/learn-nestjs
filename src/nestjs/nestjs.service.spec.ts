import { Test, TestingModule } from '@nestjs/testing';
import { NestjsService } from './nestjs.service';

describe('NestjsService', () => {
  let service: NestjsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NestjsService],
    }).compile();

    service = module.get<NestjsService>(NestjsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
