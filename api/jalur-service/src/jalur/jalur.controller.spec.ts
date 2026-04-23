import { Test, TestingModule } from '@nestjs/testing';
import { JalurController } from './jalur.controller';
import { JalurService } from './jalur.service';

describe('JalurController', () => {
  let controller: JalurController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JalurController],
      providers: [JalurService],
    }).compile();

    controller = module.get<JalurController>(JalurController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
