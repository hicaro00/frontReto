import { HttpClient , HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,throwError, catchError } from 'rxjs';
import { ExchangeRate, ExchangeRateRequest, ExchangeRateResponse } from '../model';

@Injectable({
  providedIn: 'root'
})
export class ExchageService {

  constructor(private http: HttpClient) { }

  getAllExchanges(): Observable<ExchangeRate[]>{
    return this.http.get<ExchangeRate []>('http://localhost:8080/exchange/traer').pipe(
      catchError(this.handleError)
    )
  }

  private handleError (error:HttpErrorResponse){
    if(error.status===0){
      console.error('Se ha producio un error ', error.error);
    }
    else{
      console.error('Backend retornó el código de estado ', error.status, error.error);
    }
    return throwError(()=> new Error('Algo falló. Por favor intente nuevamente.'));
  }

  calcularExchange(exchange: ExchangeRateRequest): Observable<ExchangeRateResponse>{
    return this.http.post<any>('http://localhost:8080/exchange/convert',exchange).pipe(
      catchError(this.handleError)
    )
  }

}
