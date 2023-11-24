import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Validators, FormBuilder ,ReactiveFormsModule ,FormsModule} from '@angular/forms';


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

  calculoForm = this.fb.group({
    monto: ['', Validators.required],
    origen: ['', Validators.required],
    destino: ['', Validators.required],

  })
  

  constructor(private fb:FormBuilder
    ) { }
    
   
  
}

