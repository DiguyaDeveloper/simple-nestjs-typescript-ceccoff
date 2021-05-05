import { Module } from '@nestjs/common';
import { SharedModule } from 'src/shared/shared.module';
import { RateController } from './controller/rate.controller';
import { RateService } from './service/rate.service';

@Module({
  controllers: [RateController],
  providers: [RateService],
  imports: [SharedModule],
})
export class RateModule {}
