import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

const ENDPOINT_ROOT = `${environment.api}/metrics`;

@Injectable()
export class MetricsService {

    constructor(
        private http: HttpClient
    ) {}

    getErrorMetrics() {
        return this.http.get(`${ENDPOINT_ROOT}/errors`);
    }

}
