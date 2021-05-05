import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CsvParserCustomService } from 'src/shared/services/csv-parser/csv-parser.service';
import { RateService } from '../service/rate.service';

@ApiTags('rate')
@Controller('rate')
export class RateController {
  constructor(
    private readonly rateService: RateService,
    private readonly csvParserCustomService: CsvParserCustomService,
  ) {}

  @Post()
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @ApiOperation({ summary: 'Create User' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @UseInterceptors(FileInterceptor('file'))
  async getSpecialRateList(
    @UploadedFile() file: Express.Multer.File,
  ): Promise<any> {
    this.rateService.processFileAndReturnRate(file);
    return {
      file: file.buffer.toString(),
    };
  }
}
