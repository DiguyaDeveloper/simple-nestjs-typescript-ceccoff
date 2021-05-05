import { Injectable } from '@nestjs/common';
import { CsvParserCustomService } from 'src/shared/services/csv-parser/csv-parser.service';
import { RateCallerService } from 'src/shared/services/rate-caller.service';

@Injectable()
export class RateService {
  constructor(
    private readonly csvParserCustomService: CsvParserCustomService,
    private readonly specialRateService: RateCallerService,
  ) {}

  getSpecialRateList(rate: any): any {
    return '';
  }

  async processFileAndReturnRate(file: Express.Multer.File): Promise<any> {
    await this.csvParserCustomService.parse(file);
    await this.specialRateService.getSpecialRatesByMerchantId(123);
    console.log(file);
  }
}
