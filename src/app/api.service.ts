import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Contacto } from './model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi = 'http://localhost:8080';

  constructor(
    private http: HttpClient
  ) {
  }

  login(credentials: Contacto): Observable<any> {
    return this.http.post<any>(this.urlApi + '/auth/login', credentials).pipe(
      map((userData) => {
        sessionStorage.setItem('token', userData.token);
        return userData;
      })
    );
  }

  

  getTipoDeCambios(): Observable<any> {
    const token: string = localStorage.getItem('token') ?? '';

    if (token) {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      return this.http.get<any>(`${this.urlApi}/exchange/traer`, { headers });
    } else {
      return new Observable(observer => {
        observer.error('Token not found in localStorage');
        observer.complete();
        console.log(observer);
      });
    }
  }
}



