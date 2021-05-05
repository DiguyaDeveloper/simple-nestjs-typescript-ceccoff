import { HttpModule, Module } from '@nestjs/common';
import { CsvModule } from 'nest-csv-parser';
import { CsvParserCustomService } from './services/csv-parser/csv-parser.service';
import { RateCallerService } from './services/rate-caller.service';

@Module({
  imports: [CsvModule, HttpModule],
  providers: [CsvParserCustomService, RateCallerService],
  exports: [CsvParserCustomService, RateCallerService],
})
export class SharedModule {}
