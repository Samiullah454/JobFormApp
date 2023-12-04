import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  
  private apiUrl = 'https://localhost:7015/api/Job/Add';

  constructor(private http: HttpClient) { }

  createJob(jobData: any): Observable<any> {
    return this.http.post(this.apiUrl, jobData);
  }
}
