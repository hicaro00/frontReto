import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {map, Observable, throwError} from 'rxjs';
import { Contacto } from './model';

@Injectable({
  providedIn:'root'
})
export class ApiService {

  private urlApi = 'http://localhost:8080';

  constructor(
    private http: HttpClient
  ) {
  }

  login(creds: Contacto){
    return this.http.post(this.urlApi+'/login',creds,{
      observe: 'response'
    }).pipe(map((response: HttpResponse<any>) => {
        const body = response.body;
        const headers = response.headers;
        const  bearerToken = body.get('data')!;
        const token = bearerToken.replace('Bearer ','');
        localStorage.setItem('token',token);
        return body;
        }
      )
    )
  }

  getToken(){
    return localStorage.getItem('token');
  }

  getTipoDeCambios() : Observable<any>{

    const token = localStorage.getItem('token');

    if (token) {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      return this.http.get<any>(`${this.urlApi}/api/conversion/listadecambios`, { headers });
    } else {
      return new Observable(observer => {
        observer.error('Token no encontrado en el localStorage');
        observer.complete();
      });
    }
  }
}



