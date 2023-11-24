
export interface Contacto {
  user: string;
  password:string;
}

export interface ExchangeRate{
  id:string;
  currencyFrom:string;
  currencyTo:string;
  rate:number;
}
export interface ExchangeRateResponse{
  amount:number ;
  convertedAmount:number;
  currencyFrom:string;
  currencyTo:string;
  exchangeRate:number;
}
export interface ExchangeRateRequest{
 amount: number;
 currencyFrom: string;
 currencyTo: string;
}

