import { Component, OnInit } from '@angular/core';
import { MetricsService } from '../../metrics.service';

declare var UAParser;

@Component({
  selector: 'app-errors-dashboard',
  templateUrl: './errors-dashboard.component.html',
  styleUrls: ['./errors-dashboard.component.scss']
})
export class ErrorsDashboardComponent implements OnInit {

  errors;

  constructor(
    private metricsService: MetricsService
  ) { }

  ngOnInit() {
    this.metricsService.getErrorMetrics().subscribe(resp => {
      this.errors = resp;
    }, errorResp => {
      console.error(errorResp);
    });
  }

  getTime(ts: number) {
    return new Date(ts);
  }

  getUserAgent(uastring) {
    const b = new UAParser([uastring]).getBrowser();
    return `${b.name} ${b.major}`;
  }

  toggleDetails(err) {
    err.showDetails = !err.showDetails;
  }

}
