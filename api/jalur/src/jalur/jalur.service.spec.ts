import { Test, TestingModule } from '@nestjs/testing';
import { JalurService } from './jalur.service';

describe('JalurService', () => {
  let service: JalurService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JalurService],
    }).compile();

    service = module.get<JalurService>(JalurService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
