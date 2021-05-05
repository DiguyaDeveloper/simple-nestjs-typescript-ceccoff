import { Test, TestingModule } from '@nestjs/testing';
import { RateService } from '../service/rate.service';
import { RateController } from './rate.controller';

describe('RateController', () => {
  let controller: RateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RateController],
      providers: [RateService],
      imports: [],
    }).compile();

    controller = module.get<RateController>(RateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
