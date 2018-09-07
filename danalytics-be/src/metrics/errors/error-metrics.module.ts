import {Module} from '@nestjs/common';

import {ErrorMetricsController} from './error-metrics.controller';

@Module({
  controllers: [ErrorMetricsController]
})
export class ErrorMetricsModule {}
