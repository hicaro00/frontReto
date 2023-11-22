import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../api.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  data: any[] = [];
  

  constructor(
    private apiService: ApiService){

  }
  ngOnInit(): void {
    this.llenarData();
  }


  
llenarData(){
    this.apiService.getTipoDeCambios().subscribe(data => {
      this.data = data;
      console.log(this.data)
  })
}


}
