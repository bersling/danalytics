import { Component, OnInit } from '@angular/core';
import { MetricsService } from '../../metrics.service';
declare var UAParser;

function nowMinusNHours(numberOfHours: number) {
  const d = new Date();
  d.setHours(d.getHours() - numberOfHours);
  return d;
}


@Component({
  selector: 'app-errors-dashboard',
  templateUrl: './errors-dashboard.component.html',
  styleUrls: ['./errors-dashboard.component.scss']
})
export class ErrorsDashboardComponent implements OnInit {

  errors;
  task = '';
  nhours = 24;
  loading = false;

  constructor(
    private metricsService: MetricsService
  ) { }

  ngOnInit() {
    this.getErrors();
  }

  private getErrors() {
    this.loading = true;
    const query = {
      task: this.task,
      start: nowMinusNHours(this.nhours),
      end: new Date()
    };
    this.metricsService.getErrorMetrics(query).subscribe(resp => {
      this.errors = resp;
      this.loading = false;
    }, errorResp => {
      console.error(errorResp);
      this.loading = false;
    });
  }

  searchErrors() {
    this.getErrors();
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
