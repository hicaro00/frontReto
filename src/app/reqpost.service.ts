import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReqpostService {

  constructor(
    private http: HttpClient
  ) { }


    getTipoDeCambios(){
      const url = 'https://api.example.com/tipodecambios'; // replace with your API endpoint
      return this.http.get(url);
    }

  



}
