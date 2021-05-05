import { Test, TestingModule } from '@nestjs/testing';
import { CsvParserCustomService } from './csv-parser.service';

describe('CsvParserCustomService', () => {
  let service: CsvParserCustomService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CsvParserCustomService],
    }).compile();

    service = module.get<CsvParserCustomService>(CsvParserCustomService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
