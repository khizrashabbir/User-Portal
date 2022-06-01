import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _http: HttpClient) { }
  getData(data: any): Observable<any> {
    return this._http.get(`${baseUrl}users/getData'`, data);
  }
  addData(data: any): Observable<any> {
    return this._http.post(`${baseUrl}users/addData'`, data);
  }
}
