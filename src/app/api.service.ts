import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Contacto } from './model';
import { ContcResponse } from './model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi = 'http://localhost:8080';

  constructor(
    private http: HttpClient,
  ) {
  }

  login(creds: Contacto) {
    return this.http.post(this.urlApi + '/login', creds, {
      observe: 'response'
    }).pipe(map((response: HttpResponse<any>) => {
      const body: ContcResponse = response.body;

      const bearerToken = body.data;
      console.log(bearerToken);
      const token = bearerToken.replace('Bearer ','');
      localStorage.setItem('token', token);
      return body;
    }));
  }

  

  getTipoDeCambios(): Observable<any> {
    const token: string = localStorage.getItem('token') ?? '';

    if (token) {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      return this.http.get<any>(`${this.urlApi}/exchange`, { headers });
    } else {
      return new Observable(observer => {
        observer.error('Token not found in localStorage');
        observer.complete();
        console.log(observer);
      });
    }
  }
}



