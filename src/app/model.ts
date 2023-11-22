export interface Contacto {
  user: string;
  password:string;
}
export interface ContcResponse {
  data: string;
  message:string;
}
export interface ExchangeRate{
  id:string;
  currencyFrom:string;
  currencyTo:string;
  rate:number;
}

