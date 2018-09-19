import { Slider } from './../models/Slider';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '../../../node_modules/@angular/core';

const PROTOCOL = 'http';
const PORT = '3500';
@Injectable({
  providedIn: 'root'
})
export class RestDataSource {
  baseUrl: String;
  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }
  getSliders(): Observable<Slider[]> {
    return this.http.get<Slider[]>(`${this.baseUrl}sliders`);
  }

}
