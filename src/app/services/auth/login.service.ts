import { Injectable } from '@angular/core';
import { Contacto,  } from '../../model';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import  { Observable, throwError, catchError, BehaviorSubject , map} from 'rxjs';
import { tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ExchangeRate } from '../../model';
import {ExchangeRateRequest, ExchangeRateResponse } from '../../model';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlApi = 'http://localhost:8080';
  currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentUserData: BehaviorSubject<String> =new BehaviorSubject<String>("");


  constructor(private http: HttpClient) {
    this.currentUserLoginOn=new BehaviorSubject<boolean>(sessionStorage.getItem("token")!=null);
    this.currentUserData=new BehaviorSubject<String>(sessionStorage.getItem("token") || "");
  
  }

  login(credentials:Contacto):Observable<any>{
    return this.http.post<any>(this.urlApi+"/auth/login",credentials).pipe(
      tap( (userData) => {
        sessionStorage.setItem("token", userData.token);
        this.currentUserData.next(userData.token);
        this.currentUserLoginOn.next(true);
      }),
      map((userData)=> userData.token),
      catchError(this.handleError)
    );
  }


  logout():void{
    sessionStorage.removeItem("token");
    this.currentUserLoginOn.next(false);
  }
  
  private handleError(error:HttpErrorResponse){
    if(error.status===0){
      console.error('Se ha producio un error ', error.error);
    }
    else{
      console.error('Backend retornó el código de estado ', error);
    }
    return throwError(()=> new Error('Algo falló. Por favor intente nuevamente.'));
  }

  get userData():Observable<String>{
    return this.currentUserData.asObservable();
  }

  get userLoginOn(): Observable<boolean>{
    return this.currentUserLoginOn.asObservable();
  }

  get userToken():String{
    return this.currentUserData.value;
  }

  ///trER LISTA DE LA BASE DE DATOS

  getAllExchanges(): Observable<ExchangeRate[]>{
    return this.http.get<ExchangeRate []>('http://localhost:8080/exchange/traer').pipe(
      catchError(this.handleError)
    )
  }

  //calcular el exchange
  calcularExchange(exchange: ExchangeRateRequest): Observable<ExchangeRateResponse>{
    return this.http.post<any>('http://localhost:8080/exchange/convert',exchange).pipe(
      catchError(this.handleError)
    )
  }

 


}
