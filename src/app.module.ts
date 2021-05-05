import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { RateModule } from './modules/rate/rate.module';
import { MulterModule } from '@nestjs/platform-express';
import { CsvModule } from 'nest-csv-parser';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [
    UserModule,
    RateModule,
    MulterModule.registerAsync({
      useFactory: () => ({
        dest: './upload',
      }),
    }),
    SharedModule,
    HttpModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
