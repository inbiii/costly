import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient) { }

  getCities(): Observable<any> {
    return this.http.get('http://localhost:8082/api/funds')
  }

  getCity(id: number): Observable<any> {
    return this.http.get(`http://localhost:8082/api/funds/${id}`)
  }

  postCity(cityObj: any): Observable<any> {
    return this.http.post(`http://localhost:8082/api/funds`, cityObj);
  }
  deleteCity(id: number, cit: any): Observable<any> {
    return this.http.delete(`http://localhost:8082/api/funds/${id}`, cit);
  }
  patchCity(id: any, city: any): Observable<any> {
    return this.http.patch(`http://localhost:8082/api/funds/${id}`, city);
  }
}
