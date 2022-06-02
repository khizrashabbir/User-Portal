import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _http: HttpClient) { }
  getAllData(): Observable<any> {
    return this._http.get(`${baseUrl}users/getData`);
  }
  addData(data: any): Observable<any> {
    return this._http.post(`${baseUrl}users/addData`, data);
  }
  updateData(data: any): Observable<any> {
    return this._http.put(`${baseUrl}users/updateData`, data);
  }
  deactivateData(data: any): Observable<any> {
    return this._http.put(`${baseUrl}users/deactivateData`, data);
  }
  searchData(data: any): Observable<any> {
    return this._http.post(`${baseUrl}users/searchData`, data);
  }

}
