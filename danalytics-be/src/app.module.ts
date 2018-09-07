import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ErrorMetricsController} from './metrics/errors/error-metrics.controller';

@Module({
  imports: [],
  controllers: [AppController, ErrorMetricsController],
  providers: [AppService],
})
export class AppModule {}
