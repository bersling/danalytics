import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MetricsService } from '../metrics.service';
import { ErrorsDashboardComponent } from './errors-dashboard/errors-dashboard.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ErrorsDashboardComponent
  ],
  exports: [
    ErrorsDashboardComponent
  ],
  providers: [
    MetricsService,
    DatePipe
  ]
})
export class DashboardModule { }
