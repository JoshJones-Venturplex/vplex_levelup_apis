import { Test, TestingModule } from '@nestjs/testing';
import { BagelsService } from './bagels.service';

describe('BagelsService', () => {
  let service: BagelsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BagelsService],
    }).compile();

    service = module.get<BagelsService>(BagelsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
