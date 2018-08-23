import {Controller, Get} from '@nestjs/common';
import { getAllErrors } from '../../danalytics/danalytics';

@Controller('/api/metrics/errors')
export class ErrorMetricsController {

  @Get()
  public async getErrorMetrics() {
    try {
      const errors = await getAllErrors();
      return {
        errors: errors
      };
    } catch (err) {
      return {
        oupsi: err
      };
    }
  }

}
