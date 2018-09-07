import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

const ENDPOINT_ROOT = `${environment.api}`;

@Injectable()
export class MetricsService {

    constructor(
        private http: HttpClient
    ) {}

    getErrorMetrics(filters) {
        return this.http.post(`${ENDPOINT_ROOT}`, filters);
    }

}
