import { Test, TestingModule } from '@nestjs/testing';
import { BagelsController } from './bagels.controller';

describe('Bagels Controller', () => {
  let controller: BagelsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BagelsController],
    }).compile();

    controller = module.get<BagelsController>(BagelsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
