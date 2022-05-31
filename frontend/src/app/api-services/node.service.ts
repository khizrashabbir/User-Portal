import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NodeService {

 
  // constructor(private _http: HttpClient) { }
  // getData(data): Observable<any> {
  //   return this._http.post(`${baseUrl}node/getData`, data);
  // }
}
