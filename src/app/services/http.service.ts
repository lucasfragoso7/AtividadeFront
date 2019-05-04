import { API_URL } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient){}


  get<T>(ENDPOINT: string): Observable<T>{
    return this.http.get<T>(`${API_URL}${ENDPOINT}`);

  }
  getById<T>(ENDPOINT: string, id:string): Observable<T>{
    return this.http.get<T>(`${API_URL}${ENDPOINT}/${id}`);

  }
  post<T>(ENDPOINT: string, body:any): Observable<T>{
    return this.http.post<T>(`${API_URL}${ENDPOINT}`, body);

  }
  put<T>(ENDPOINT: string, id:string, body:any): Observable<T>{
    return this.http.put<T>(`${API_URL}${ENDPOINT}/${id}`, body);

  }
  delete<T>(ENDPOINT: string, id:string): Observable<T>{
    return this.http.delete<T>(`${API_URL}${ENDPOINT}/${id}`);

  }
}
