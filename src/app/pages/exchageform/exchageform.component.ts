import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Validators, FormBuilder ,ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { ExchangeRateRequest, ExchangeRateResponse } from '../../model';
import { ExchageService } from '../../services/exchage.service';
import { LoginService } from '../../services/auth/login.service';


@Component({
  selector: 'app-exchageform',
  standalone: true,
  imports: [CommonModule,MatButtonModule,MatSelectModule,MatInputModule ,ReactiveFormsModule ,FormsModule,MatFormFieldModule,],
  templateUrl: './exchageform.component.html',
  styleUrl: './exchageform.component.css'
})
export class ExchageformComponent {

  monedas = [
    { abreviatura: "PEN", nombreCompleto: "Sol Peruano" },
    { abreviatura: "USD", nombreCompleto: "Dólar Americano" },
    { abreviatura: "EUR", nombreCompleto: "Euro" },
    { abreviatura: "GBP", nombreCompleto: "Libra Esterlina" },
    { abreviatura: "ARS", nombreCompleto: "Peso Argentino" },
    { abreviatura: "BRL", nombreCompleto: "Real Brasileño" },
    { abreviatura: "CLP", nombreCompleto: "Peso Chileno" },
    { abreviatura: "COP", nombreCompleto: "Peso Colombiano" },
    { abreviatura: "MXN", nombreCompleto: "Peso Mexicano" },
    { abreviatura: "PAB", nombreCompleto: "Balboa Panameño" },
    { abreviatura: "UYU", nombreCompleto: "Peso Uruguayo" },
    
  ];
 
  selectedorigen: string = "";
  selecteddestino: string = "";
  resultado: number = 0;

  currencyFromResponse: string = "";
  currencyToResponse: string = "";
  result: number = 0;
  amountInicial: number = 0;
  exchangeRateAply: number = 0;


  loginError:string="";

  calculoForm = this.fb.group({
    amount: ["", Validators.required],
    
  })
  
  calcular: ExchangeRateRequest = {

    amount: 0,
    currencyFrom: "",
    currencyTo: "",
  };
  

  constructor(private fb: FormBuilder,private calc:LoginService) { }
    
  get amount(){
    return this.calculoForm.controls.amount;
  }
  get currencyFrom(){
    return this.selectedorigen;
  }
  get currencyTo(){
    return this.selecteddestino;
  }

  getNombreCompleto(abreviatura: string): string {
    const moneda = this.monedas.find(m => m.abreviatura === abreviatura);
    return moneda ? moneda.nombreCompleto : abreviatura;
  }

  calculator() {
    if (this.calculoForm.valid) {
      // Extraer el valor numérico del control del formulario
      const amountValue = this.calculoForm.controls.amount.value;
  
      // Verificar que amountValue es un número antes de continuar
      if (typeof amountValue === 'number') {
        const exchangeRequest: ExchangeRateRequest = {
          amount: amountValue,
          currencyFrom: this.currencyFrom,
          currencyTo: this.currencyTo,
        };
  
        this.calc.calcularExchange(exchangeRequest).subscribe({
          next: (userData : ExchangeRateResponse) => {
            this.amountInicial = userData.amount;
            this.result = userData.convertedAmount;
            this.currencyFromResponse = this.getNombreCompleto(userData.currencyFrom);
            this.currencyToResponse = this.getNombreCompleto(userData.currencyTo);
            this.exchangeRateAply = userData.exchangeRate;
            console.log(userData);
          },
          error: (error) => {
            if (error.status === 400) {
              // Manejar error 400 (BadRequest)
              const errorMessage = error.error.message || 'Hubo un error en la petición.';
              this.mostrarAlertaError(errorMessage);
            } else if (error.status === 0 && !error.error) {
              // Manejar respuesta vacía o nula
              this.mostrarAlertaError('La Divisa a consultar no esta disponible en este momento.');
            } else {
              console.error('Error en la petición:', error);
              this.mostrarAlertaError('Hubo un error en la petición. Por favor, inténtalo de nuevo.');
            }}
        });
      } else {
        console.error('El valor de "amount" no es un número.');
      }
    }
  }

  mostrarAlertaError(mensaje: string): void {
    // Puedes utilizar la librería de alertas que prefieras o mostrar un mensaje en el DOM
    alert(mensaje);
  }

}

